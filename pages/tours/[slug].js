import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { toursData } from '../../data/toursData';
import { destinationsData } from '../../data/destinationsData';

export default function TourDetailPage() {
    const router = useRouter();
    const { slug } = router.query;
    const [activeDay, setActiveDay] = useState(null);

    const tour = toursData.find(t => t.slug === slug);
    const destination = tour ? destinationsData.find(d => d.category === tour.category) : null;

    if (!tour) {
        return (
            <>
                <Navbar />
                <main className="pt-24 pb-20 min-h-screen flex items-center justify-center bg-[#F8F7F2] dark:bg-gray-900">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-400 dark:text-gray-600 mb-4">Tour not found</h1>
                        <Link href="/" className="text-[#0A4D54] hover:underline font-semibold">← Back to Home</Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Head>
                <title>{tour.title} - Vibe-Yatra | Private Driver Tours</title>
                <meta name="description" content={tour.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />

            <main className="bg-[#F8F7F2] dark:bg-gray-900 transition-colors duration-300">
                {/* Hero */}
                <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end pt-[70px]">
                    <img
                        src={tour.image}
                        alt={tour.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-20 pb-12">
                        {destination && (
                            <Link
                                href={`/destinations/${destination.slug}`}
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-4 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to {destination.name} Tours
                            </Link>
                        )}
                        <span className="inline-block px-3 py-1 bg-[#E4A84A]/20 backdrop-blur-sm rounded-full text-[#E4A84A] text-xs font-semibold tracking-wider uppercase mb-3">
                            {tour.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-3">
                            {tour.title}
                        </h1>
                        <p className="text-lg text-white/70 italic max-w-3xl">
                            {tour.tagline}
                        </p>
                    </div>
                </section>

                {/* Quick Info Bar */}
                <section className="bg-white dark:bg-gray-800 shadow-lg -mt-6 relative z-20 mx-4 md:mx-20 rounded-2xl overflow-hidden transition-colors duration-300">
                    <div className="max-w-7xl mx-auto grid grid-cols-3 divide-x divide-gray-100 dark:divide-gray-700">
                        <div className="p-4 md:p-6 text-center">
                            <div className="text-2xl mb-1">🗓</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">Duration</div>
                            <div className="text-lg font-bold text-[#0A4D54] dark:text-white">{tour.duration}</div>
                        </div>
                        <div className="p-4 md:p-6 text-center">
                            <div className="text-2xl mb-1">☀️</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">Best Time</div>
                            <div className="text-lg font-bold text-[#0A4D54] dark:text-white">{tour.bestTime}</div>
                        </div>
                        <div className="p-4 md:p-6 text-center">
                            <div className="text-2xl mb-1">🚗</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">Tour Type</div>
                            <div className="text-lg font-bold text-[#0A4D54] dark:text-white">Private Driver</div>
                        </div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Overview */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#0A4D54] dark:text-white mb-4 font-display">Tour Overview</h2>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{tour.description}</p>
                            </div>

                            {/* Highlights */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#0A4D54] dark:text-white mb-6 font-display">Tour Highlights</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {tour.highlights.map((highlight, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
                                        >
                                            <div className="w-8 h-8 bg-[#0A4D54]/10 dark:bg-[#E4A84A]/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-4 h-4 text-[#0A4D54] dark:text-[#E4A84A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Day-by-Day Itinerary */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-[#0A4D54] dark:text-white mb-6 font-display">Day-by-Day Itinerary</h2>
                                <div className="space-y-3">
                                    {tour.itinerary.map((day, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transition-all duration-300"
                                        >
                                            <button
                                                onClick={() => setActiveDay(activeDay === idx ? null : idx)}
                                                className="w-full flex items-center gap-4 p-4 md:p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                                            >
                                                <div className="w-12 h-12 bg-gradient-to-br from-[#0A4D54] to-[#0A4D54]/80 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0">
                                                    Day {day.day}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-bold text-[#0A4D54] dark:text-white text-lg">{day.title}</h3>
                                                    <p className="text-gray-500 dark:text-gray-400 text-sm truncate">{day.description}</p>
                                                </div>
                                                <svg
                                                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${activeDay === idx ? 'rotate-180' : ''}`}
                                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {activeDay === idx && (
                                                <div className="px-4 md:px-5 pb-5 pt-0 border-t border-gray-100 dark:border-gray-700">
                                                    <p className="text-gray-700 dark:text-gray-300 mb-4 pt-4 leading-relaxed">{day.description}</p>
                                                    <div className="flex flex-wrap gap-4">
                                                        <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-lg text-sm font-medium">
                                                            <span>🍽</span> {day.meals}
                                                        </div>
                                                        <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-3 py-1.5 rounded-lg text-sm font-medium">
                                                            <span>🏨</span> {day.accommodation}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Inclusions / Exclusions */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 shadow-sm border border-green-100 dark:border-green-800/30">
                                    <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-5 flex items-center gap-3">
                                        <span className="w-10 h-10 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center text-green-600 text-lg">✓</span>
                                        What's Included
                                    </h3>
                                    <ul className="space-y-3">
                                        {tour.inclusions.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </span>
                                                <span className="font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-6 shadow-sm border border-red-100 dark:border-red-800/30">
                                    <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-5 flex items-center gap-3">
                                        <span className="w-10 h-10 bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center text-red-500 text-lg">✗</span>
                                        What's Not Included
                                    </h3>
                                    <ul className="space-y-3">
                                        {tour.exclusions.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                                <span className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </span>
                                                <span className="font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Inquiry Card */}
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                                    <div className="text-center mb-6">
                                        <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium mb-2">Interested in this tour?</div>
                                        <div className="text-2xl font-bold text-[#0A4D54] dark:text-[#E4A84A] mb-1">Get a Custom Quote</div>
                                        <div className="text-xs text-gray-400 dark:text-gray-500">Tailored pricing for your group</div>
                                    </div>

                                    <div className="space-y-3 mb-6 bg-[#F8F7F2] dark:bg-gray-700/50 rounded-xl p-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500 dark:text-gray-400">Duration</span>
                                            <span className="font-semibold text-gray-900 dark:text-white">{tour.duration}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500 dark:text-gray-400">Best Season</span>
                                            <span className="font-semibold text-gray-900 dark:text-white">{tour.bestTime}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500 dark:text-gray-400">Tour Type</span>
                                            <span className="font-semibold text-gray-900 dark:text-white">Private Driver Tour</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500 dark:text-gray-400">Destinations</span>
                                            <span className="font-semibold text-gray-900 dark:text-white">{tour.itinerary.length - 2}+ Cities</span>
                                        </div>
                                    </div>

                                    <a
                                        href={`https://wa.me/919720159067?text=Hi! I'm interested in the ${tour.title} tour package. Please share details and pricing.`}
                                        className="block w-full text-center px-6 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-colors mb-3 shadow-md hover:shadow-lg"
                                    >
                                        💬 Inquire on WhatsApp
                                    </a>
                                    <a
                                        href={`mailto:bhadanavishant0009@gmail.com?subject=Inquiry: ${tour.title} Tour`}
                                        className="block w-full text-center px-6 py-4 border-2 border-[#0A4D54] text-[#0A4D54] dark:text-white dark:border-gray-600 font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors mb-3 shadow-sm hover:shadow-md"
                                    >
                                        ✉️ Email Us
                                    </a>
                                    <a
                                        href="tel:+919720159067"
                                        className="block w-full text-center px-6 py-4 bg-[#0A4D54] text-white font-bold rounded-xl hover:bg-[#0A4D54]/90 transition-colors shadow-md hover:shadow-lg"
                                    >
                                        📞 Call Us Now
                                    </a>
                                </div>

                                {/* Route Overview */}
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                                    <h3 className="font-bold text-[#0A4D54] dark:text-white mb-3">Route Overview</h3>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                                        {tour.itinerary.map((day, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <div className="w-6 h-6 bg-[#0A4D54]/10 dark:bg-[#E4A84A]/20 rounded-full flex items-center justify-center text-[10px] font-bold text-[#0A4D54] dark:text-[#E4A84A] shrink-0">
                                                    {day.day}
                                                </div>
                                                <span className="truncate">{day.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Tours CTA */}
                {destination && (
                    <section className="px-6 md:px-20 py-12 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                        <div className="max-w-7xl mx-auto text-center">
                            <h2 className="text-2xl font-bold text-[#0A4D54] dark:text-white mb-3 font-display">
                                Explore More {destination.name} Tours
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Discover other tour packages in {destination.name}
                            </p>
                            <Link
                                href={`/destinations/${destination.slug}`}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A4D54] text-white rounded-full font-bold hover:bg-[#0A4D54]/90 transition-colors"
                            >
                                View All {destination.name} Tours
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </>
    );
}
