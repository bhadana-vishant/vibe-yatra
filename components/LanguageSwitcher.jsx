import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
    const { locale, changeLanguage, languages } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentLanguage = languages[locale];

    return (
        <div className="fixed bottom-6 left-6 z-50" ref={dropdownRef}>
            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute bottom-full left-0 mb-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden min-w-[160px] animate-fadeIn">
                    {Object.entries(languages).map(([code, lang]) => (
                        <button
                            key={code}
                            onClick={() => {
                                changeLanguage(code);
                                setIsOpen(false);
                            }}
                            className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left ${code === locale ? 'bg-[#0A4D54]/10 dark:bg-[#0A4D54]/30 text-[#0A4D54] dark:text-teal-300 font-semibold' : 'text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            <span className="text-xl">{lang.flag}</span>
                            <span className="text-sm">{lang.name}</span>
                            {code === locale && (
                                <svg className="w-4 h-4 ml-auto text-[#0A4D54] dark:text-teal-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
            >
                <span className="text-xl">{currentLanguage.flag}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#0A4D54] dark:group-hover:text-teal-300">
                    {locale.toUpperCase()}
                </span>
                <svg
                    className={`w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </button>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
        </div>
    );
}
