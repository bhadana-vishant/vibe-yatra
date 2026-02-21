import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useLanguage();
  const { theme, toggleTheme, mounted } = useTheme();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      const isDynamicPage = router.pathname.startsWith('/destinations/') || router.pathname.startsWith('/tours/');

      if (isDynamicPage) {
        if (currentScrollY <= 80) {
          // Hide at the very top of dynamic pages
          setIsVisible(false);
        } else {
          // Show anywhere else on the page
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    // Set initial state
    const isDynamicPage = router.pathname.startsWith('/destinations/') || router.pathname.startsWith('/tours/');
    if (isDynamicPage && window.scrollY <= 80) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [router.pathname]);

  const scrollToDestinations = (e) => {
    e.preventDefault();
    if (router.pathname !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      });
    } else {
      document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm dark:shadow-gray-900/50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#0A4D54] dark:text-white font-display">
          Vibe-<span className="text-[#E4A84A]">Yatra</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/#destinations" onClick={scrollToDestinations} className="text-gray-700 dark:text-gray-300 hover:text-[#0A4D54] dark:hover:text-[#E4A84A] transition-colors font-medium cursor-pointer">
            {t('nav.ourTours')}
          </a>
          <Link href="/fleet" className="text-gray-700 dark:text-gray-300 hover:text-[#0A4D54] dark:hover:text-[#E4A84A] transition-colors font-medium">
            {t('nav.ourFleet')}
          </Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-[#0A4D54] dark:hover:text-[#E4A84A] transition-colors font-medium">
            {t('nav.aboutUs')}
          </Link>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="relative w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center group"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? (
                <svg key="moon" className="w-5 h-5 text-gray-600 dark:text-gray-300 animate-spinIn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg key="sun" className="w-5 h-5 text-yellow-400 animate-spinIn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? (
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[#0A4D54] dark:text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-6 py-4 space-y-3">
          <a href="/#destinations" onClick={(e) => { scrollToDestinations(e); setMobileOpen(false); }} className="block text-gray-700 dark:text-gray-300 hover:text-[#0A4D54] dark:hover:text-[#E4A84A] font-medium py-2 cursor-pointer">
            {t('nav.ourTours')}
          </a>
          <Link href="/fleet" onClick={() => setMobileOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-[#0A4D54] dark:hover:text-[#E4A84A] font-medium py-2">
            {t('nav.ourFleet')}
          </Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-[#0A4D54] dark:hover:text-[#E4A84A] font-medium py-2">
            {t('nav.aboutUs')}
          </Link>
        </div>
      )}
    </nav>
  );
}
