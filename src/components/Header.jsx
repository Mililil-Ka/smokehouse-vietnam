import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'products', label: t('nav.products') },
    { id: 'gallery', label: t('nav.gallery') },
    { id: 'contacts', label: t('nav.contacts') },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-smoke/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:scale-110 transition-transform">🐟</span>
            <span className="font-display font-bold text-lg md:text-xl tracking-wide">
              <span className="text-cream group-hover:text-white transition-colors">SMOKE</span>
              <span className="text-fire-light group-hover:text-white transition-colors ml-1">HOUSE</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-cream/90 hover:text-white text-sm font-medium transition-all cursor-pointer bg-transparent border-none py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fire group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-smoke-light rounded-full p-1">
              <button
                onClick={() => changeLanguage('ru')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                  i18n.language === 'ru' 
                    ? 'bg-fire text-white' 
                    : 'text-cream/60 hover:text-cream'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                  i18n.language === 'en' 
                    ? 'bg-fire text-white' 
                    : 'text-cream/60 hover:text-cream'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => scrollToSection('contacts')}
              className="hidden md:block bg-fire hover:bg-fire-dark text-white px-5 py-2 rounded-full font-semibold text-sm transition-all hover:scale-105 cursor-pointer"
            >
              {t('products.order')}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-cream text-2xl cursor-pointer bg-transparent border-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-smoke-light">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-cream/90 hover:text-white hover:bg-smoke-light text-left px-3 py-2 rounded-lg tr ansition-colors cursor-pointer bg-transparent border-none"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contacts')}
                className="bg-fire hover:bg-fire-dark text-white px-4 py-2 rounded-full font-semibold text-sm text-center transition-all cursor-pointer"
              >
                {t('products.order')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}