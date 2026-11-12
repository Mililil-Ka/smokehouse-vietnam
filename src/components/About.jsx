import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const features = [
    {
      icon: '🐟',
      title: t('about.card1.title'),
      text: t('about.card1.text'),
      color: 'from-fire/20 to-transparent',
    },
    {
      icon: '🔥',
      title: t('about.card2.title'),
      text: t('about.card2.text'),
      color: 'from-orange-400/20 to-transparent',
    },
    {
      icon: '🌿',
      title: t('about.card3.title'),
      text: t('about.card3.text'),
      color: 'from-green-400/20 to-transparent',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-cream overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-fire/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-smoke/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="font-display font-bold text-smoke text-3xl md:text-5xl lg:text-6xl mb-4">
            {t('about.title')}
          </h2>
          <p className="text-smoke/60 text-lg md:text-xl max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-smoke/5"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-smoke/5 group-hover:bg-white rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <span className="text-4xl md:text-5xl">{feature.icon}</span>
                </div>

                <div className="text-fire/30 font-display font-bold text-5xl md:text-6xl mb-4">
                  0{index + 1}
                </div>

                <h3 className="font-display font-bold text-smoke text-xl md:text-2xl mb-3">
                  {feature.title}
                </h3>

                <p className="text-smoke/60 text-base md:text-lg leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 flex items-center justify-center gap-4">
          <div className="h-px bg-smoke/10 flex-1 max-w-xs" />
          <span className="text-fire text-2xl">🐟</span>
          <div className="h-px bg-smoke/10 flex-1 max-w-xs" />
        </div>
      </div>
    </section>
  );
}