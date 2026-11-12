import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'products', label: t('nav.products') },
    { id: 'gallery', label: t('nav.gallery') },
    { id: 'contacts', label: t('nav.contacts') },
  ];

  const socials = [
    { id: 'telegram', icon: '✈️', href: 'https://t.me/smokehouse_vietnam', label: 'Telegram' },
    { id: 'zalo', icon: '💬', href: 'https://zalo.me/84901234567', label: 'Zalo' },
    { id: 'facebook', icon: '📘', href: 'https://facebook.com/', label: 'Facebook' },
    { id: 'instagram', icon: '📷', href: 'https://instagram.com/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-smoke-dark text-cream">
      {/* Верхняя часть футера */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          
          {/* Логотип и описание */}
          <div>
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 mb-4 cursor-pointer bg-transparent border-none"
            >
              <span className="text-2xl">🐟</span>
              <span className="font-display font-bold text-xl tracking-wide">
                <span className="text-cream">SMOKE</span>
                <span className="text-fire ml-1">HOUSE</span>
              </span>
            </button>
            <p className="text-cream/50 text-sm leading-relaxed mb-4">
              {t('footer.description') || 'Крафтовое холодное копчение рыбы во Вьетнаме. Натуральные продукты, классические технологии, ручная работа.'}
            </p>
            {/* Соцсети */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-cream/5 hover:bg-fire hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">
              {t('footer.navigation') || 'Навигация'}
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-cream/50 hover:text-fire text-left transition-colors cursor-pointer bg-transparent border-none"
                >
                  → {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">
              {t('footer.contacts') || 'Контакты'}
            </h3>
            <div className="flex flex-col gap-3 text-cream/50 text-sm">
              <a href="tel:+84901234567" className="hover:text-fire transition-colors">
                📞 +84 90 123 45 67
              </a>
              <a href="https://t.me/smokehouse_vietnam" target="_blank" rel="noopener noreferrer" className="hover:text-fire transition-colors">
                ✈️ @smokehouse_vietnam
              </a>
              <p>📍 Nha Trang, Vietnam</p>
              <p>🕐 8:00 – 20:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-sm">
            © {new Date().getFullYear()} SmokeHouse Vietnam. {t('footer.rights')}
          </p>
          <p className="text-cream/30 text-sm flex items-center gap-1">
            Made with <span className="text-fire">❤</span> in Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
}