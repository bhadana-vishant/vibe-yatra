import React, { createContext, useContext, useState, useEffect } from 'react';
import { languages, defaultLocale } from '../locales';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [locale, setLocale] = useState(defaultLocale);
    const [translations, setTranslations] = useState(languages[defaultLocale].translations);

    useEffect(() => {
        // Check for saved language preference
        const savedLocale = localStorage.getItem('vibe-yatra-locale');
        if (savedLocale && languages[savedLocale]) {
            setLocale(savedLocale);
            setTranslations(languages[savedLocale].translations);
        }
    }, []);

    const changeLanguage = (newLocale) => {
        if (languages[newLocale]) {
            setLocale(newLocale);
            setTranslations(languages[newLocale].translations);
            localStorage.setItem('vibe-yatra-locale', newLocale);
        }
    };

    const t = (key) => {
        // Support nested keys like 'hero.title'
        const keys = key.split('.');
        let value = translations;

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                // Fallback to English if key not found
                value = languages.en.translations;
                for (const fallbackKey of keys) {
                    if (value && typeof value === 'object' && fallbackKey in value) {
                        value = value[fallbackKey];
                    } else {
                        return key; // Return key if not found in fallback either
                    }
                }
                break;
            }
        }

        return value;
    };

    return (
        <LanguageContext.Provider value={{ locale, changeLanguage, t, languages }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

export default LanguageContext;
