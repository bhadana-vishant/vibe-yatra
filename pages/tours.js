import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toursData } from '../data/toursData';
import { useLanguage } from '../context/LanguageContext';

export default function ToursPage() {
  const { t } = useLanguage();
  const [filteredTours, setFilteredTours] = useState(toursData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [expandedTour, setExpandedTour] = useState(null);

  const categories = ['All', 'Rajasthan', 'Golden Triangle', 'Leh Ladakh', 'Himachal Pradesh', 'India & Nepal'];
  const difficulties = ['All', 'Easy', 'Moderate', 'Challenging'];

  const filterTours = () => {
    let filtered = toursData;

    if (searchTerm) {
      filtered = filtered.filter(tour =>
        tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(tour => tour.category === selectedCategory);
    }

    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(tour => tour.difficulty === selectedDifficulty);
    }

    setFilteredTours(filtered);
  };

  React.useEffect(() => {
    filterTours();
  }, [searchTerm, selectedCategory, selectedDifficulty]);

  const toggleExpanded = (tourId) => {
    setExpandedTour(expandedTour === tourId ? null : tourId);
  };

  return (
    <>
      <Head>
        <title>Tour Packages - Vibe Yatra | Private Driver Tours in India</title>
        <meta name="description" content="Explore India with Vibe Yatra's premium private driver tour packages. Rajasthan, Golden Triangle, Leh Ladakh, Himachal Pradesh tours with personalized service." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-24 pb-20 bg-gradient-to-br from-[#F8F7F2] to-white min-h-screen">
        {/* Hero Section */}
        <section className="px-6 md:px-20 py-16 text-center bg-gradient-to-r from-[#0A4D54] to-[#0A4D54]/80 text-white">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            {t('toursPage.title')} ✨
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            {t('toursPage.subtitle')}
          </p>
          <div className="mt-6 text-lg text-yellow-300">
            {t('toursPage.features')}
          </div>
        </section>

        {/* Filters Section */}
        <section className="px-6 md:px-20 py-12 bg-white shadow-lg">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0A4D54] mb-6 text-center">🎯</h2>

            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder={t('toursPage.searchPlaceholder')}
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-[#0A4D54] focus:outline-none transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('toursPage.destination')}</label>
                <select
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#0A4D54] focus:outline-none"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="All">{t('toursPage.allDestinations')}</option>
                  {categories.slice(1).map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('toursPage.difficulty')}</label>
                <select
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#0A4D54] focus:outline-none"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  <option value="All">{t('toursPage.all')}</option>
                  <option value="Easy">{t('toursPage.easy')}</option>
                  <option value="Moderate">{t('toursPage.moderate')}</option>
                  <option value="Challenging">{t('toursPage.challenging')}</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <div className="text-lg font-semibold text-[#0A4D54] bg-[#F8F7F2] p-3 rounded-lg w-full text-center">
                  {filteredTours.length} {t('toursPage.toursFound')} 🎯
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Pills */}
        <section className="px-6 md:px-20 py-8">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === 'All'
                ? 'bg-[#0A4D54] text-white'
                : 'bg-white text-[#0A4D54] border-2 border-[#0A4D54] hover:bg-[#0A4D54] hover:text-white'
                }`}
            >
              {t('toursPage.allDestinations')}
            </button>
            {categories.slice(1).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === cat
                  ? 'bg-[#0A4D54] text-white'
                  : 'bg-white text-[#0A4D54] border-2 border-[#0A4D54] hover:bg-[#0A4D54] hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Tours Grid */}
        <section className="px-6 md:px-20 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                  t={t}
                  isExpanded={expandedTour === tour.id}
                  onToggleExpanded={() => toggleExpanded(tour.id)}
                />
              ))}
            </div>

            {filteredTours.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-600 mb-2">{t('toursPage.noToursFound')}</h3>
                <p className="text-gray-500">{t('toursPage.tryAdjusting')}</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-20 py-16 bg-gradient-to-r from-[#0A4D54] to-[#0A4D54]/80 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('craftJourney.title')} 🌟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('craftJourney.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+916361519067" className="px-8 py-4 bg-white text-[#0A4D54] font-bold rounded-full hover:bg-gray-100 transition-colors">
              📞 {t('whyUs.cta.callNow')}
            </a>
            <a href="https://wa.me/916361519067" className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0A4D54] transition-colors">
              💬 {t('toursPage.inquireWhatsApp')}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Tour Card Component
function TourCard({ tour, t, isExpanded, onToggleExpanded }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-[#0A4D54]">
          {tour.duration}
        </div>
        <div className="absolute top-4 left-4 bg-[#0A4D54] text-white px-3 py-1 rounded-full text-sm font-bold">
          {tour.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0A4D54] mb-2">{tour.title}</h3>
        <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
          📍 {tour.location}
        </p>
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{tour.description}</p>

        {/* Quick Info */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-[#F8F7F2] text-[#0A4D54] px-3 py-1 rounded-full text-xs font-semibold">
            🗓 {t('toursPage.bestTime')}: {tour.bestTime}
          </span>
          <span className="bg-[#F8F7F2] text-[#0A4D54] px-3 py-1 rounded-full text-xs font-semibold">
            👥 {tour.groupSize}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tour.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
            tour.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
            {tour.difficulty === 'Easy' ? t('toursPage.easy') :
              tour.difficulty === 'Moderate' ? t('toursPage.moderate') :
                t('toursPage.challenging')}
          </span>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-700 mb-2">{t('toursPage.highlights')}:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {tour.highlights.slice(0, 3).map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#0A4D54]">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expandable Itinerary */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-semibold text-[#0A4D54] mb-3">{t('toursPage.dayByDay')}:</h4>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {tour.itinerary.map((day, idx) => (
                <div key={idx} className="bg-[#F8F7F2] p-3 rounded-lg">
                  <div className="font-semibold text-sm text-[#0A4D54]">{t('toursPage.day')} {day.day}: {day.title}</div>
                  <p className="text-xs text-gray-600 mt-1">{day.description}</p>
                  <div className="flex gap-4 mt-2 text-xs text-gray-500">
                    <span>🍽 {day.meals}</span>
                    <span>🏨 {day.accommodation}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Inclusions/Exclusions */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <h5 className="font-semibold text-sm text-green-700 mb-1">{t('toursPage.included')}:</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  {tour.inclusions.slice(0, 3).map((item, idx) => (
                    <li key={idx}>✓ {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-red-700 mb-1">{t('toursPage.notIncluded')}:</h5>
                <ul className="text-xs text-gray-600 space-y-1">
                  {tour.exclusions.slice(0, 3).map((item, idx) => (
                    <li key={idx}>✗ {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Footer with Price and Buttons */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div>
            <span className="text-2xl font-bold text-[#0A4D54]">{tour.price}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onToggleExpanded}
              className="px-4 py-2 bg-[#F8F7F2] text-[#0A4D54] rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors"
            >
              {isExpanded ? t('toursPage.hideItinerary') : t('toursPage.viewItinerary')}
            </button>
            <a
              href={`/tours/${tour.slug}`}
              className="px-4 py-2 bg-[#0A4D54] text-white rounded-lg font-semibold text-sm hover:bg-[#0A4D54]/90 transition-colors"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}