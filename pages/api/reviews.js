export const config = {
    runtime: 'edge',
};

function getDB() {
    // Try @cloudflare/next-on-pages context first
    try {
        const { getRequestContext } = require('@cloudflare/next-on-pages');
        const ctx = getRequestContext();
        if (ctx && ctx.env && ctx.env.DB) {
            return ctx.env.DB;
        }
    } catch (e) {
        // getRequestContext not available
    }

    // Try process.env (Cloudflare Pages injects bindings here too)
    if (typeof process !== 'undefined' && process.env && process.env.DB) {
        return process.env.DB;
    }

    return null;
}

export default async function handler(req) {
    try {
        const db = getDB();

        if (!db) {
            return new Response(JSON.stringify({ error: 'Database binding not available' }), {
                status: 503,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        if (req.method === 'GET') {
            try {
                const { results } = await db
                    .prepare('SELECT * FROM reviews WHERE approved = 1 ORDER BY rating DESC, date DESC')
                    .all();
                return new Response(JSON.stringify(results), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                });
            } catch (error) {
                console.error('Failed to fetch reviews:', error);
                return new Response(JSON.stringify({ error: 'Failed to load reviews' }), {
                    status: 500,
                    headers: { 'Content-Type': 'application/json' },
                });
            }
        }

        if (req.method === 'POST') {
            try {
                const body = await req.json();
                const { name, country, flag, tour, rating, text } = body;

                if (!name || !country || !tour || !rating || !text) {
                    return new Response(JSON.stringify({ error: 'All fields are required' }), {
                        status: 400,
                        headers: { 'Content-Type': 'application/json' },
                    });
                }

                if (rating < 1 || rating > 5) {
                    return new Response(JSON.stringify({ error: 'Rating must be between 1 and 5' }), {
                        status: 400,
                        headers: { 'Content-Type': 'application/json' },
                    });
                }

                const date = new Date().toISOString().split('T')[0];
                const result = await db
                    .prepare(
                        'INSERT INTO reviews (name, country, flag, tour, rating, text, date, approved) VALUES (?, ?, ?, ?, ?, ?, ?, 1)'
                    )
                    .bind(
                        name.trim(),
                        country.trim(),
                        flag || '🌍',
                        tour.trim(),
                        parseInt(rating),
                        text.trim(),
                        date
                    )
                    .run();

                const newReview = {
                    id: result.meta.last_row_id,
                    name: name.trim(),
                    country: country.trim(),
                    flag: flag || '🌍',
                    tour: tour.trim(),
                    rating: parseInt(rating),
                    text: text.trim(),
                    date,
                    approved: 1,
                };

                return new Response(JSON.stringify(newReview), {
                    status: 201,
                    headers: { 'Content-Type': 'application/json' },
                });
            } catch (error) {
                console.error('Failed to save review:', error);
                return new Response(JSON.stringify({ error: 'Failed to save review' }), {
                    status: 500,
                    headers: { 'Content-Type': 'application/json' },
                });
            }
        }

        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Unhandled error in reviews API:', error);
        return new Response(JSON.stringify({ error: 'Internal server error', details: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
