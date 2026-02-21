import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function WhyUs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: "🚗",
      title: t('whyUs.features.privateDriver.title'),
      description: t('whyUs.features.privateDriver.description'),
      highlight: t('whyUs.features.privateDriver.highlight')
    },
    {
      icon: "📍",
      title: t('whyUs.features.customizable.title'),
      description: t('whyUs.features.customizable.description'),
      highlight: t('whyUs.features.customizable.highlight')
    },
    {
      icon: "💬",
      title: t('whyUs.features.support.title'),
      description: t('whyUs.features.support.description'),
      highlight: t('whyUs.features.support.highlight')
    },
    {
      icon: "🛡️",
      title: t('whyUs.features.safe.title'),
      description: t('whyUs.features.safe.description'),
      highlight: t('whyUs.features.safe.highlight')
    },
    {
      icon: "💰",
      title: t('whyUs.features.pricing.title'),
      description: t('whyUs.features.pricing.description'),
      highlight: t('whyUs.features.pricing.highlight')
    },
    {
      icon: "🏆",
      title: t('whyUs.features.expertise.title'),
      description: t('whyUs.features.expertise.description'),
      highlight: t('whyUs.features.expertise.highlight')
    }
  ];

  return (
    <section id="why-us" className="py-20 px-6 md:px-20 bg-gradient-to-b from-white to-[#F8F7F2] dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#0A4D54]/10 dark:bg-[#0A4D54]/30 text-[#0A4D54] dark:text-teal-300 rounded-full text-sm font-semibold mb-4">
            {t('whyUs.sectionTag')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#0A4D54] dark:text-white mb-4">
            {t('whyUs.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('whyUs.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-[#0A4D54]/10 dark:bg-[#0A4D54]/30 text-[#0A4D54] dark:text-teal-300 rounded-full text-xs font-semibold">
                  {feature.highlight}
                </span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A4D54] to-[#0A4D54]/80 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0A4D54] dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A4D54] to-[#E4A84A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-[#0A4D54] text-white px-8 py-4 rounded-2xl">
            <div className="text-left">
              <div className="text-sm opacity-80">{t('whyUs.cta.ready')}</div>
              <div className="font-bold">{t('whyUs.cta.contact')}</div>
            </div>
            <a href="tel:+919720159067" className="px-6 py-2 bg-white text-[#0A4D54] rounded-full font-bold hover:bg-gray-100 transition-colors">
              📞 {t('whyUs.cta.callNow')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
