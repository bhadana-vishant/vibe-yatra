import React, { useState } from 'react';
import { toursData } from '../data/toursData';

const countryFlags = {
    'United States': '🇺🇸', 'United Kingdom': '🇬🇧', 'Germany': '🇩🇪', 'France': '🇫🇷',
    'Australia': '🇦🇺', 'Canada': '🇨🇦', 'Japan': '🇯🇵', 'Spain': '🇪🇸',
    'Italy': '🇮🇹', 'Netherlands': '🇳🇱', 'Brazil': '🇧🇷', 'India': '🇮🇳',
    'China': '🇨🇳', 'South Korea': '🇰🇷', 'Mexico': '🇲🇽', 'Russia': '🇷🇺',
    'Sweden': '🇸🇪', 'Switzerland': '🇨🇭', 'Norway': '🇳🇴', 'New Zealand': '🇳🇿',
    'Singapore': '🇸🇬', 'South Africa': '🇿🇦', 'Thailand': '🇹🇭', 'Argentina': '🇦🇷',
    'Other': '🌍'
};

export default function ReviewForm({ isOpen, onClose, onReviewSubmitted }) {
    const [form, setForm] = useState({ name: '', email: '', country: '', tour: '', rating: 5, text: '' });
    const [hoveredStar, setHoveredStar] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSubmitting(true);

        try {
            const res = await fetch('/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...form,
                    flag: countryFlags[form.country] || '🌍'
                })
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Failed to submit review');
            }

            setSuccess(true);
            setForm({ name: '', email: '', country: '', tour: '', rating: 5, text: '' });
            if (onReviewSubmitted) onReviewSubmitted();

            setTimeout(() => {
                setSuccess(false);
                onClose();
            }, 2500);
        } catch (err) {
            setError(err.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-800 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
                >
                    ✕
                </button>

                {success ? (
                    /* Success State */
                    <div className="p-10 text-center">
                        <div className="text-6xl mb-4">🎉</div>
                        <h3 className="text-2xl font-bold text-[#0A4D54] dark:text-white mb-2 font-display">Thank You!</h3>
                        <p className="text-gray-600 dark:text-gray-300">Your review has been submitted successfully.</p>
                    </div>
                ) : (
                    /* Form */
                    <form onSubmit={handleSubmit} className="p-8">
                        <h3 className="text-2xl font-bold text-[#0A4D54] dark:text-white mb-1 font-display">Share Your Experience</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Tell us about your journey with Vibe Yatra</p>

                        {error && (
                            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        {/* Name */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Your Name</label>
                            <input
                                type="text"
                                required
                                placeholder="e.g. John Smith"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#E4A84A] focus:border-transparent outline-none transition-all text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email <span className="text-gray-400 font-normal">(Optional)</span></label>
                            <input
                                type="email"
                                placeholder="e.g. john@gmail.com"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#E4A84A] focus:border-transparent outline-none transition-all text-sm"
                            />
                        </div>

                        {/* Country */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Country</label>
                            <select
                                required
                                value={form.country}
                                onChange={(e) => setForm({ ...form, country: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#E4A84A] focus:border-transparent outline-none transition-all text-sm"
                            >
                                <option value="">Select your country</option>
                                {Object.keys(countryFlags).map(c => (
                                    <option key={c} value={c}>{countryFlags[c]} {c}</option>
                                ))}
                            </select>
                        </div>

                        {/* Tour */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Tour Package</label>
                            <select
                                required
                                value={form.tour}
                                onChange={(e) => setForm({ ...form, tour: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#E4A84A] focus:border-transparent outline-none transition-all text-sm"
                            >
                                <option value="">Select tour package</option>
                                {toursData.map(tour => (
                                    <option key={tour.id} value={tour.title}>{tour.title}</option>
                                ))}
                            </select>
                        </div>

                        {/* Star Rating */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Rating</label>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setForm({ ...form, rating: star })}
                                        onMouseEnter={() => setHoveredStar(star)}
                                        onMouseLeave={() => setHoveredStar(0)}
                                        className="text-3xl transition-transform hover:scale-110"
                                    >
                                        {star <= (hoveredStar || form.rating) ? '⭐' : '☆'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Review Text */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Your Review</label>
                            <textarea
                                required
                                rows={4}
                                placeholder="Tell us about your experience..."
                                value={form.text}
                                onChange={(e) => setForm({ ...form, text: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#E4A84A] focus:border-transparent outline-none transition-all text-sm resize-none"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full py-3.5 bg-gradient-to-r from-[#0A4D54] to-[#0d6b74] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#0A4D54]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        >
                            {submitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                                    Submitting...
                                </span>
                            ) : 'Submit Review'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
