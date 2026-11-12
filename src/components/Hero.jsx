import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-smoke"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-smoke-dark via-smoke to-smoke-light" />
        
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-fire/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-fire/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fire/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        {/* Рыбка-иконка */}
        <div className="mb-6 animate-bounce">
          <span className="text-6xl md:text-7xl inline-block drop-shadow-lg">🐟</span>
        </div>

        <div className="inline-flex items-center gap-2 bg-fire/10 border border-fire/30 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-fire rounded-full animate-pulse" />
          <span className="text-fire-light text-sm font-medium tracking-wide">
            {t('hero.badge') || '100% Natural • 100% Handmade'}
          </span>
        </div>

        <h1 className="font-display font-bold text-cream text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
          {t('hero.title')}
        </h1>

        <p className="text-cream/70 text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto mb-10">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToProducts}
            className="bg-fire hover:bg-fire-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-fire/30 cursor-pointer"
          >
            {t('hero.btn')} →
          </button>
          <a
            href="#contacts"
            className="text-cream/80 hover:text-white border border-cream/30 hover:border-cream/60 px-8 py-4 rounded-full font-medium text-lg transition-all cursor-pointer"
          >
            {t('nav.contacts')}
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <span className="text-fire text-2xl">✓</span>
            <span className="text-cream/80 text-sm">{t('about.card1.text')}</span>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <span className="text-fire text-2xl">✓</span>
            <span className="text-cream/80 text-sm">{t('about.card2.text')}</span>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <span className="text-fire text-2xl">✓</span>
            <span className="text-cream/80 text-sm">{t('about.card3.text')}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream/50 hover:text-fire transition-colors cursor-pointer bg-transparent border-none"
        aria-label="Scroll down"
      >
        <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}