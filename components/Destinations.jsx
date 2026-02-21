import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { destinationsData } from "../data/destinationsData";
import { toursData } from "../data/toursData";

export default function Destinations() {
    const { t } = useLanguage();

    const destinations = destinationsData.map(dest => ({
        ...dest,
        name: dest.slug === 'rajasthan' ? t('destinations.rajasthan') :
            dest.slug === 'golden-triangle' ? t('destinations.goldenTriangle') :
                dest.slug === 'leh-ladakh' ? t('destinations.lehLadakh') :
                    dest.slug === 'himachal-pradesh' ? t('destinations.himachalPradesh') :
                        t('destinations.indiaNepal'),
        tagline: dest.slug === 'rajasthan' ? t('destinationsSection.landOfKings') :
            dest.slug === 'golden-triangle' ? t('destinationsSection.classicCircuit') :
                dest.slug === 'leh-ladakh' ? t('destinationsSection.roofOfWorld') :
                    dest.slug === 'himachal-pradesh' ? t('destinationsSection.mountainParadise') :
                        t('destinationsSection.crossBorder'),
        tours: toursData.filter(tour => tour.category === dest.category).length,
    }));

    return (
        <section id="destinations" className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 bg-[#0A4D54]/10 dark:bg-[#0A4D54]/30 text-[#0A4D54] dark:text-teal-300 rounded-full text-sm font-semibold mb-4">
                        {t('destinationsSection.sectionTag')}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#0A4D54] dark:text-white mb-4">
                        {t('destinationsSection.title')}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('destinationsSection.subtitle')}
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((dest, index) => (
                        <Link
                            key={index}
                            href={`/destinations/${dest.slug}`}
                            className={`group relative h-64 rounded-2xl overflow-hidden ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            {/* Background Image */}
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${dest.color} opacity-80 group-hover:opacity-90 transition-opacity`} />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                                    <div className="text-sm font-medium opacity-80 mb-1">{dest.tagline}</div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{dest.name}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                                            {dest.tours} {dest.tours === 1 ? t('destinationsSection.tour') : t('destinationsSection.tours')}
                                        </span>
                                        <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
