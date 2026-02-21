import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

// Company Values - Simplified without heavy emojis
const companyValues = [
  {
    icon: "✨",
    title: "Excellence in Service",
    description: "We strive to exceed expectations in every journey, ensuring comfort, safety, and memorable experiences for all our travelers."
  },
  {
    icon: "🤝",
    title: "Trust & Reliability",
    description: "Building lasting relationships through transparent communication, punctuality, and dependable service that you can count on."
  },
  {
    icon: "🌿",
    title: "Cultural Connection",
    description: "We believe travel is about stories, not just sights. Our local expertise helps you connect deeply with India's rich heritage."
  },
  {
    icon: "🛡️",
    title: "Safety First",
    description: "Your safety is our top priority. All our vehicles are regularly maintained and our drivers are professionally trained."
  }
];

// FAQ Data - Refined for a new travel agency
const faqData = [
  {
    id: 1,
    question: "What is included in the price?",
    answer: "Our pricing typically includes a private, well-maintained vehicle with a professional driver, all fuel costs, tolls, state taxes, and parking fees. Our transparent pricing ensures you know exactly what you are paying for."
  },
  {
    id: 2,
    question: "Are hotels and entrance fees included?",
    answer: "To give you maximum flexibility, we do not typically include hotels, monument entrance fees, or your meals in our base pricing. This allows you to choose accommodation that fits your budget. However, we are happy to provide recommendations and can include them upon request!"
  },
  {
    id: 3,
    question: "How do I book my tour?",
    answer: "Simply use the 'Get Quote' option on our fleet page or contact us via WhatsApp. We'll get back to you promptly with a detailed proposal and quote based on your requirements."
  },
  {
    id: 4,
    question: "Is it safe to travel by road in India?",
    answer: "Yes, especially with a private, experienced driver. Our drivers are experts in navigating Indian roads safely and efficiently. Traveling by our private cars is one of the safest and most comfortable ways to explore the country."
  },
  {
    id: 5,
    question: "Do you provide English-speaking drivers?",
    answer: "Yes, our drivers are proficient in English and Hindi. They are experienced professionals who can ensure smooth communication throughout your journey."
  },
  {
    id: 6,
    question: "Can I customize my trip duration and locations?",
    answer: "Absolutely! We specialize in creating personalized itineraries based on your interests, budget, and time constraints. Whether you want to explore heritage sites or experience local culture, we tailor the perfect trip for you."
  }
];

export default function AboutPage() {
  const { t } = useLanguage();
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  // Translated company values
  const translatedCompanyValues = [
    {
      icon: "✨",
      title: t('aboutPage.values.excellence'),
      description: t('aboutPage.values.excellenceDesc')
    },
    {
      icon: "🤝",
      title: t('aboutPage.values.trust'),
      description: t('aboutPage.values.trustDesc')
    },
    {
      icon: "🌿",
      title: t('aboutPage.values.cultural'),
      description: t('aboutPage.values.culturalDesc')
    },
    {
      icon: "🛡️",
      title: t('aboutPage.values.safety'),
      description: t('aboutPage.values.safetyDesc')
    }
  ];

  return (
    <>
      <Head>
        <title>About Us | Vibe Yatra</title>
        <meta name="description" content="Discover the story behind Vibe Yatra and learn about our mission to provide authentic, safe, and memorable travel experiences across India." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-24 pb-20 bg-gradient-to-br from-[#F8F7F2] to-white dark:from-gray-900 dark:to-gray-800 min-h-screen transition-colors duration-300">
        {/* Hero Section */}
        <section className="px-6 md:px-20 py-16 text-center bg-gradient-to-r from-[#0A4D54] to-[#0A4D54]/80 text-white shadow-md">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t('aboutPage.heroTitle')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            {t('aboutPage.heroSubtitle')}
          </p>
        </section>

        {/* Our Story Section - Text Only */}
        <section className="px-6 md:px-20 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D54] dark:text-teal-400 mb-8">
              {t('aboutPage.storyTitle')}
            </h2>

            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg mt-8">
              <p>
                {t('aboutPage.storyP1')}
              </p>
              <p>
                {t('aboutPage.storyP2')}
              </p>
              <p className="font-semibold text-[#0A4D54] dark:text-teal-400 mt-8 text-xl">
                {t('aboutPage.storyP3')}
              </p>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="px-6 md:px-20 py-16 bg-white dark:bg-gray-800 border-y border-gray-100 dark:border-gray-700 transition-colors duration-300">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D54] dark:text-teal-400 text-center mb-12">
              {t('aboutPage.coreValues')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {translatedCompanyValues.map((value, index) => (
                <div key={index} className="text-center p-8 bg-gradient-to-br from-[#F8F7F2]/50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300">
                  <div className="text-4xl mb-4 opacity-80">{value.icon}</div>
                  <h3 className="text-xl font-bold text-[#0A4D54] dark:text-teal-400 mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-20 py-20 bg-gradient-to-br from-[#F8F7F2] to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D54] dark:text-teal-400 text-center mb-4">
              {t('aboutPage.faqTitle')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 mt-8">
              {t('aboutPage.faqSubtitle')}
            </p>

            <div className="space-y-4">
              {faqData.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isExpanded={expandedFAQ === faq.id}
                  onToggle={() => toggleFAQ(faq.id)}
                />
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

// FAQ Item Component
function FAQItem({ faq, isExpanded, onToggle }) {
  return (
    <div className={`border bg-white dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 ${isExpanded ? 'border-[#0A4D54] dark:border-teal-500 shadow-md' : 'border-gray-200 dark:border-gray-700 shadow-sm hover:border-[#0A4D54]/50 dark:hover:border-teal-500/50'}`}>
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex justify-between items-center transition-colors focus:outline-none"
      >
        <span className={`font-semibold pr-4 ${isExpanded ? 'text-[#0A4D54] dark:text-teal-400' : 'text-gray-800 dark:text-gray-200'}`}>{faq.question}</span>
        <span className={`text-[#E4A84A] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm pt-2 border-t border-gray-100 dark:border-gray-700">{faq.answer}</p>
      </div>
    </div>
  );
}