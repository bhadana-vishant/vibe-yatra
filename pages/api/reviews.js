import reviewsData from '../../data/reviews.json';

// In a serverless environment like Cloudflare Pages, we cannot read/write to the local filesystem using 'fs'.
// We temporarily hold new reviews in memory (though they will reset if the serverless function cold starts).
// For permanent storage, this will be connected to a database like Cloudflare D1 later.
let inMemoryReviews = [...reviewsData];

function getReviews() {
    return inMemoryReviews;
}

function saveReviews(reviews) {
    inMemoryReviews = reviews;
}

export default function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const reviews = getReviews();
            const approved = reviews
                .filter(r => r.approved)
                .sort((a, b) => new Date(b.date) - new Date(a.date));
            return res.status(200).json(approved);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to load reviews' });
        }
    }

    if (req.method === 'POST') {
        try {
            const { name, country, flag, tour, rating, text } = req.body;

            if (!name || !country || !tour || !rating || !text) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            if (rating < 1 || rating > 5) {
                return res.status(400).json({ error: 'Rating must be between 1 and 5' });
            }

            const reviews = getReviews();
            const newReview = {
                id: reviews.length > 0 ? Math.max(...reviews.map(r => r.id)) + 1 : 1,
                name: name.trim(),
                country: country.trim(),
                flag: flag || '🌍',
                tour: tour.trim(),
                rating: parseInt(rating),
                text: text.trim(),
                date: new Date().toISOString().split('T')[0],
                approved: true
            };

            reviews.push(newReview);
            saveReviews(reviews);

            return res.status(201).json(newReview);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to save review' });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
