import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

// Featured tours from our data - showing top picks from each region
const featuredTours = [
  {
    id: 1,
    slug: "rajasthan-royal-heritage-tour",
    title: "Rajasthan Royal Heritage Tour",
    location: "Rajasthan",
    duration: "10 Days",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600",
    category: "Rajasthan",
    tagline: "Palaces, Forts & Desert Magic"
  },
  {
    id: 6,
    slug: "classic-golden-triangle-tour",
    title: "Classic Golden Triangle Tour",
    location: "Delhi-Agra-Jaipur",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600",
    category: "Golden Triangle",
    tagline: "India's Most Iconic Journey"
  },
  {
    id: 11,
    slug: "leh-ladakh-adventure-tour",
    title: "Leh Ladakh Adventure Tour",
    location: "Ladakh",
    duration: "12 Days",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600",
    category: "Leh Ladakh",
    tagline: "High Passes & Pristine Lakes"
  },
  {
    id: 16,
    slug: "classic-himachal-hill-station-tour",
    title: "Classic Himachal Hill Station Tour",
    location: "Himachal Pradesh",
    duration: "9 Days",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600",
    category: "Himachal Pradesh",
    tagline: "Mountain Serenity Awaits"
  },
  {
    id: 8,
    slug: "golden-triangle-with-ranthambore-safari",
    title: "Golden Triangle with Ranthambore Safari",
    location: "Delhi-Agra-Jaipur-Ranthambore",
    duration: "9 Days",
    image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600",
    category: "Golden Triangle",
    tagline: "Culture Meets Wildlife"
  },
  {
    id: 21,
    slug: "india-nepal-cultural-journey",
    title: "India & Nepal Cultural Journey",
    location: "India and Nepal",
    duration: "14 Days",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
    category: "India & Nepal",
    tagline: "Two Nations, One Journey"
  }
];

export default function PopularTours() {
  const { t } = useLanguage();

  return (
    <section id="popular" className="py-20 px-6 md:px-20 bg-[#F8F7F2] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#E4A84A]/20 dark:bg-[#E4A84A]/30 text-[#E4A84A] rounded-full text-sm font-semibold mb-4">
            {t('popularTours.sectionTag')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#0A4D54] dark:text-white mb-4">
            {t('popularTours.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('popularTours.subtitle')}
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0A4D54] rounded-full text-xs font-bold">
                    {tour.category}
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#0A4D54]/90 backdrop-blur-sm text-white rounded-full text-xs font-bold">
                    {tour.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-[#E4A84A] font-semibold mb-1">{tour.tagline}</div>
                <h3 className="text-xl font-bold text-[#0A4D54] dark:text-white mb-2 group-hover:text-[#E4A84A] transition-colors">
                  {tour.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1 mb-4">
                  <span>📍</span> {tour.location}
                </p>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-[#0A4D54] dark:text-teal-300 font-bold">{t('popularTours.onRequest')}</span>
                  <span className="px-4 py-2 bg-[#0A4D54] text-white rounded-lg font-semibold text-sm group-hover:bg-[#E4A84A] transition-colors">
                    {t('popularTours.viewDetails')}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Tours Button */}
        <div className="text-center mt-12">
          <Link
            href="/tours"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A4D54] text-white font-bold rounded-full hover:bg-[#0A4D54]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            <span>{t('popularTours.exploreAll')}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
