import React, { useState, useEffect } from "react";
import Link from "next/link";
import ReviewForm from "./ReviewForm";

export default function Testimonials() {
    const [reviews, setReviews] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);

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

    const topReviews = reviews.slice(0, 4);
    const avgRating = reviews.length > 0
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
        : '5.0';

    return (
        <>
            <section className="py-20 px-6 md:px-20 bg-[#0A4D54]">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 bg-white/10 text-yellow-400 rounded-full text-sm font-semibold mb-4">
                            HAPPY TRAVELERS
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                            What Our Guests Say
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Real stories from real travelers who explored India with us.
                        </p>
                    </div>

                    {/* Reviews Grid */}
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="bg-white/10 rounded-2xl p-8 animate-pulse">
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-5 h-5 bg-white/20 rounded" />)}
                                    </div>
                                    <div className="h-4 bg-white/10 rounded mb-2 w-full" />
                                    <div className="h-4 bg-white/10 rounded mb-2 w-3/4" />
                                    <div className="h-4 bg-white/10 rounded mb-6 w-1/2" />
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-white/10 rounded-full" />
                                        <div>
                                            <div className="h-4 bg-white/10 rounded w-24 mb-2" />
                                            <div className="h-3 bg-white/10 rounded w-32" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {topReviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 group"
                                >
                                    {/* Rating Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <span key={i} className="text-yellow-400 text-xl">⭐</span>
                                        ))}
                                        {[...Array(5 - review.rating)].map((_, i) => (
                                            <span key={i} className="text-white/20 text-xl">☆</span>
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-white/90 text-lg leading-relaxed mb-6 italic">
                                        &ldquo;{review.text}&rdquo;
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E4A84A] to-[#d49a3a] flex items-center justify-center text-white font-bold text-lg">
                                                {review.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-white flex items-center gap-2">
                                                    {review.name}
                                                    <span className="text-lg">{review.flag}</span>
                                                </div>
                                                <div className="text-sm text-gray-400">{review.tour}</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {new Date(review.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/reviews"
                            className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                        >
                            View All Reviews
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <button
                            onClick={() => setShowForm(true)}
                            className="px-8 py-3.5 bg-[#E4A84A] text-white font-semibold rounded-full hover:bg-[#d49a3a] transition-all duration-300 hover:shadow-lg hover:shadow-[#E4A84A]/25 flex items-center gap-2"
                        >
                            ✍️ Write a Review
                        </button>
                    </div>

                    {/* Dynamic Trust Badges */}
                    <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
                        <div className="text-center text-white">
                            <div className="text-4xl font-bold text-yellow-400">{avgRating}/5</div>
                            <div className="text-sm text-gray-400">Average Rating</div>
                        </div>
                        <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                        <div className="text-center text-white">
                            <div className="text-4xl font-bold text-yellow-400">{reviews.length}</div>
                            <div className="text-sm text-gray-400">Verified Reviews</div>
                        </div>
                        <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                        <div className="text-center text-white">
                            <div className="text-4xl font-bold text-yellow-400">
                                {reviews.length > 0 ? Math.round((reviews.filter(r => r.rating >= 4).length / reviews.length) * 100) : 100}%
                            </div>
                            <div className="text-sm text-gray-400">Would Recommend</div>
                        </div>
                    </div>
                </div>
            </section>

            <ReviewForm
                isOpen={showForm}
                onClose={() => setShowForm(false)}
                onReviewSubmitted={fetchReviews}
            />
        </>
    );
}
