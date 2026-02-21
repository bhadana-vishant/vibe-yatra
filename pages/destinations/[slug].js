import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { destinationsData } from '../../data/destinationsData';
import { toursData } from '../../data/toursData';

export default function DestinationPage() {
    const router = useRouter();
    const { slug } = router.query;

    const destination = destinationsData.find(d => d.slug === slug);
    const tours = destination ? toursData.filter(t => t.category === destination.category) : [];

    if (!destination) {
        return (
            <>
                <Navbar />
                <main className="pt-24 pb-20 min-h-screen flex items-center justify-center bg-[#F8F7F2] dark:bg-gray-900">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-400 dark:text-gray-600 mb-4">Destination not found</h1>
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
                <title>{destination.name} Tours - Vibe-Yatra | Private Driver Tours</title>
                <meta name="description" content={destination.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />

            <main className="bg-[#F8F7F2] dark:bg-gray-900 transition-colors duration-300">
                {/* Hero Banner */}
                <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end pt-[70px]">
                    <img
                        src={destination.image}
                        alt={destination.name}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${destination.color} opacity-70`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-20 pb-12">
                        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-4 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </Link>
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold tracking-wider uppercase mb-3">
                            {destination.tagline}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-3">
                            {destination.name}
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                            {destination.description}
                        </p>
                        <div className="mt-4">
                            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                                {tours.length} {tours.length === 1 ? 'Tour Package' : 'Tour Packages'} Available
                            </span>
                        </div>
                    </div>
                </section>

                {/* Tour Packages Grid */}
                <section className="py-16 px-6 md:px-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {tours.map((tour) => (
                                <Link
                                    key={tour.id}
                                    href={`/tours/${tour.slug}`}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={tour.image}
                                            alt={tour.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 px-3 py-1 rounded-full text-sm font-bold text-[#0A4D54] dark:text-[#E4A84A]">
                                            {tour.duration}
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <p className="text-[#E4A84A] text-xs font-semibold uppercase tracking-wider mb-2">{tour.tagline}</p>
                                        <h3 className="text-xl font-bold text-[#0A4D54] dark:text-white mb-2 group-hover:text-[#E4A84A] transition-colors">
                                            {tour.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{tour.description}</p>

                                        {/* Quick Info */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="bg-[#F8F7F2] dark:bg-gray-700 text-[#0A4D54] dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                                                📍 {tour.location}
                                            </span>
                                            <span className="bg-[#F8F7F2] dark:bg-gray-700 text-[#0A4D54] dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                                                🗓 {tour.bestTime}
                                            </span>
                                        </div>

                                        {/* Highlights Preview */}
                                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                                            {tour.highlights.slice(0, 3).map((h, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="text-[#0A4D54] dark:text-[#E4A84A] mt-0.5">✓</span>
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Footer */}
                                        <div className="flex items-center justify-end pt-4 border-t border-gray-100 dark:border-gray-700">
                                            <span className="text-[#0A4D54] dark:text-[#E4A84A] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                                View Details
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="px-6 md:px-20 py-16 bg-gradient-to-r from-[#0A4D54] to-[#0A4D54]/80 text-white text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Can't Find Your Perfect Tour?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
                        Let us craft a personalized {destination.name} itinerary just for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+919720159067" className="px-8 py-4 bg-white text-[#0A4D54] font-bold rounded-full hover:bg-gray-100 transition-colors">
                            📞 Call Now
                        </a>
                        <a href="https://wa.me/919720159067" className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0A4D54] transition-colors">
                            💬 WhatsApp Us
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
