import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReviewForm from '../components/ReviewForm';

export default function ReviewsPage() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [filter, setFilter] = useState('all');
    const [sortBy, setSortBy] = useState('newest');

    const fetchReviews = async () => {
        try {
            const res = await fetch('/api/reviews');
            const data = await res.json();
            setReviews(data);
        } catch (err) {
            console.error('Failed to fetch reviews:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const filteredReviews = reviews
        .filter(r => filter === 'all' || r.rating === parseInt(filter))
        .sort((a, b) => {
            if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
            if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date);
            if (sortBy === 'highest') return b.rating - a.rating;
            if (sortBy === 'lowest') return a.rating - b.rating;
            return 0;
        });

    const avgRating = reviews.length > 0
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
        : '5.0';

    const ratingCounts = [5, 4, 3, 2, 1].map(star => ({
        star,
        count: reviews.filter(r => r.rating === star).length,
        percentage: reviews.length > 0
            ? Math.round((reviews.filter(r => r.rating === star).length / reviews.length) * 100)
            : 0
    }));

    return (
        <>
            <Head>
                <title>Reviews | Vibe Yatra - What Our Travelers Say</title>
                <meta name="description" content="Read reviews from travelers who explored India with Vibe Yatra's private driver tours." />
            </Head>

            <Navbar />

            {/* Hero Banner */}
            <section className="relative min-h-[40vh] flex items-end pt-[70px] bg-gradient-to-br from-[#0A4D54] to-[#0d6b74]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-20 pb-12 pt-12">
                    <span className="inline-block px-4 py-1 bg-white/10 text-yellow-400 rounded-full text-sm font-semibold mb-4">
                        TRAVELER REVIEWS
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
                        What Our Guests Say
                    </h1>
                    <p className="text-lg text-gray-300 max-w-xl">
                        Honest reviews from travelers who experienced India with Vibe Yatra.
                    </p>
                </div>
            </section>

            <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                        {/* Sidebar - Rating Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm sticky top-24 transition-colors duration-300">
                                {/* Overall Rating */}
                                <div className="text-center mb-6 pb-6 border-b border-gray-100 dark:border-gray-700">
                                    <div className="text-5xl font-bold text-[#0A4D54] dark:text-[#E4A84A] mb-1">{avgRating}</div>
                                    <div className="flex justify-center gap-1 mb-2">
                                        {[1, 2, 3, 4, 5].map(s => (
                                            <span key={s} className="text-yellow-400 text-lg">
                                                {s <= Math.round(parseFloat(avgRating)) ? '⭐' : '☆'}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{reviews.length} reviews</div>
                                </div>

                                {/* Rating Breakdown */}
                                <div className="space-y-3 mb-6">
                                    {ratingCounts.map(({ star, count, percentage }) => (
                                        <button
                                            key={star}
                                            onClick={() => setFilter(filter === String(star) ? 'all' : String(star))}
                                            className={`w-full flex items-center gap-2 text-sm group transition-all ${filter === String(star) ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                                        >
                                            <span className="text-gray-600 dark:text-gray-300 w-8">{star} ⭐</span>
                                            <div className="flex-1 h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>
                                            <span className="text-gray-500 dark:text-gray-400 w-8 text-right">{count}</span>
                                        </button>
                                    ))}
                                </div>

                                {filter !== 'all' && (
                                    <button
                                        onClick={() => setFilter('all')}
                                        className="w-full text-sm text-[#0A4D54] dark:text-[#E4A84A] font-medium hover:underline mb-4"
                                    >
                                        Clear filter
                                    </button>
                                )}

                                {/* Write Review Button */}
                                <button
                                    onClick={() => setShowForm(true)}
                                    className="w-full py-3 bg-[#E4A84A] text-white font-bold rounded-xl hover:bg-[#d49a3a] transition-colors"
                                >
                                    ✍️ Write a Review
                                </button>
                            </div>
                        </div>

                        {/* Reviews List */}
                        <div className="lg:col-span-3">
                            {/* Sort Controls */}
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                    {filter === 'all'
                                        ? `All Reviews (${filteredReviews.length})`
                                        : `${filter}-Star Reviews (${filteredReviews.length})`}
                                </h2>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-white text-sm focus:ring-2 focus:ring-[#E4A84A] outline-none"
                                >
                                    <option value="newest">Newest First</option>
                                    <option value="oldest">Oldest First</option>
                                    <option value="highest">Highest Rating</option>
                                    <option value="lowest">Lowest Rating</option>
                                </select>
                            </div>

                            {/* Reviews */}
                            {loading ? (
                                <div className="space-y-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-6 animate-pulse">
                                            <div className="flex gap-1 mb-3">
                                                {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded" />)}
                                            </div>
                                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-full" />
                                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-3/4" />
                                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                                        </div>
                                    ))}
                                </div>
                            ) : filteredReviews.length === 0 ? (
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 text-center">
                                    <div className="text-5xl mb-4">📝</div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">No reviews yet</h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-6">Be the first to share your experience!</p>
                                    <button
                                        onClick={() => setShowForm(true)}
                                        className="px-6 py-3 bg-[#E4A84A] text-white font-bold rounded-xl hover:bg-[#d49a3a] transition-colors"
                                    >
                                        Write a Review
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {filteredReviews.map((review) => (
                                        <div
                                            key={review.id}
                                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0A4D54] to-[#0d6b74] flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                                                        {review.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-gray-800 dark:text-white flex items-center gap-2">
                                                            {review.name}
                                                            <span className="text-base">{review.flag}</span>
                                                        </div>
                                                        <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                                            <span>{review.tour}</span>
                                                            <span>•</span>
                                                            <span>{new Date(review.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <span key={i} className={`text-sm ${i < review.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}>
                                                            {i < review.rating ? '⭐' : '☆'}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                &ldquo;{review.text}&rdquo;
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            <ReviewForm
                isOpen={showForm}
                onClose={() => setShowForm(false)}
                onReviewSubmitted={fetchReviews}
            />
        </>
    );
}
