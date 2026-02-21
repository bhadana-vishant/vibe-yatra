import en from './en';
import fr from './fr';
import it from './it';
import ru from './ru';
import es from './es';

export const languages = {
    en: { name: 'English', flag: '🇬🇧', translations: en },
    fr: { name: 'Français', flag: '🇫🇷', translations: fr },
    it: { name: 'Italiano', flag: '🇮🇹', translations: it },
    ru: { name: 'Русский', flag: '🇷🇺', translations: ru },
    es: { name: 'Español', flag: '🇪🇸', translations: es }
};

export const defaultLocale = 'en';

export { en, fr, it, ru, es };
