import { useTranslation } from 'react-i18next';

export default function Contacts() {
  const { t } = useTranslation();

  // Заглушки контактов (потом заменишь на реальные)
  const contacts = [
    {
      id: 'phone',
      icon: '📞',
      label: t('contacts.phone'),
      value: '+84 90 123 45 67',
      href: 'tel:+84901234567',
      color: 'from-green-400/20 to-transparent',
      borderColor: 'hover:border-green-400/50',
    },
    {
      id: 'zalo',
      icon: '💬',
      label: t('contacts.zalo'),
      value: '+84 90 123 45 67',
      href: 'https://zalo.me/84901234567',
      color: 'from-blue-400/20 to-transparent',
      borderColor: 'hover:border-blue-400/50',
    },
    {
      id: 'telegram',
      icon: '✈️',
      label: t('contacts.telegram'),
      value: '@smokehouse_vietnam',
      href: 'https://t.me/smokehouse_vietnam',
      color: 'from-sky-400/20 to-transparent',
      borderColor: 'hover:border-sky-400/50',
    },
    {
      id: 'facebook',
      icon: '📘',
      label: t('contacts.facebook'),
      value: 'SmokeHouse Vietnam',
      href: 'https://facebook.com/',
      color: 'from-indigo-400/20 to-transparent',
      borderColor: 'hover:border-indigo-400/50',
    },
  ];

  return (
    <section
      id="contacts"
      className="relative py-20 md:py-28 bg-smoke overflow-hidden"
    >
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-fire/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-fire/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-fire font-medium text-sm md:text-base mb-3 tracking-widest uppercase">
            Contacts
          </p>
          <h2 className="font-display font-bold text-cream text-3xl md:text-5xl lg:text-6xl mb-4">
            {t('contacts.title')}
          </h2>
          <p className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto">
            {t('contacts.subtitle')}
          </p>
        </div>

        {/* Сетка контактов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.href}
              target={contact.id === 'phone' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`group relative bg-smoke-light rounded-2xl p-6 md:p-8 border border-cream/10 ${contact.borderColor} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              {/* Градиент при ховере */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Иконка */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-cream/10 group-hover:bg-white/10 rounded-xl flex items-center justify-center mb-4 text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>

                {/* Лейбл */}
                <p className="text-cream/40 text-sm mb-1">{contact.label}</p>

                {/* Значение */}
                <p className="text-cream font-semibold text-base md:text-lg break-all group-hover:text-white transition-colors">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Адрес */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 bg-smoke-light/50 rounded-2xl p-6 md:p-8 border border-cream/10">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📍</span>
            <div>
              <p className="text-cream/40 text-sm">{t('contacts.address')}</p>
              <p className="text-cream font-medium">Nha Trang, Vietnam</p>
            </div>
          </div>

          <div className="hidden md:block h-10 w-px bg-cream/10" />

          <div className="flex items-center gap-3">
            <span className="text-3xl">🕐</span>
            <div>
              <p className="text-cream/40 text-sm">{t('contacts.hours') || 'Часы работы'}</p>
              <p className="text-cream font-medium">8:00 – 20:00</p>
            </div>
          </div>
        </div>

        {/* Большой CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://t.me/smokehouse_vietnam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-fire hover:bg-fire-dark text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl transition-all hover:scale-105 shadow-xl shadow-fire/30"
          >
            <span className="text-2xl">🐟</span>
            {t('contacts.cta') || 'Заказать сейчас'}
            <span className="text-2xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}