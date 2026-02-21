import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function CraftJourney() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#F8F7F2] to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-[#0A4D54] to-[#0A4D54]/90 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content Side */}
            <div className="p-8 md:p-12 text-white">
              <span className="inline-block px-4 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold mb-4">
                {t('craftJourney.sectionTag')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('craftJourney.title')}
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {t('craftJourney.subtitle')}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span className="text-sm">{t('craftJourney.features.customizable')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span className="text-sm">{t('craftJourney.features.freeConsultation')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span className="text-sm">{t('craftJourney.features.expertPlanning')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span className="text-sm">{t('craftJourney.features.bestPrice')}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919720159067?text=Hi! I'd like to plan a custom tour."
                  className="px-6 py-3 bg-yellow-400 text-[#0A4D54] font-bold rounded-full hover:bg-yellow-300 transition-colors text-center"
                >
                  💬 {t('craftJourney.chatWhatsApp')}
                </a>
                <a
                  href="mailto:bhadanavishant0009@gmail.com"
                  className="px-6 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0A4D54] transition-colors text-center"
                >
                  ✉️ {t('craftJourney.emailUs')}
                </a>
              </div>
            </div>

            {/* Image Side */}
            <div className="hidden md:block relative h-full min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=600"
                alt="Custom Tour Planning"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0A4D54]/50" />

              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <div className="font-bold text-[#0A4D54] dark:text-white">{t('craftJourney.quickResponse')}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{t('craftJourney.replyTime')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
