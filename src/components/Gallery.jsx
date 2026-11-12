import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export default function Gallery() {
  const { t } = useTranslation();

  // Временные данные (потом заменишь на реальные фото)
  const images = [
    {
      id: 1,
      emoji: '🐟',
      caption: {
        ru: 'Свежая рыба',
        en: 'Fresh fish',
      },
      size: 'large',
    },
    {
      id: 2,
      emoji: '🧂',
      caption: {
        ru: 'Посол',
        en: 'Salting',
      },
      size: 'small',
    },
    {
      id: 3,
      emoji: '🔥',
      caption: {
        ru: 'Коптильня',
        en: 'Smokehouse',
      },
      size: 'small',
    },
    {
      id: 4,
      emoji: '🪵',
      caption: {
        ru: 'Натуральная щепа',
        en: 'Natural wood chips',
      },
      size: 'small',
    },
    {
      id: 5,
      emoji: '📦',
      caption: {
        ru: 'Упаковка',
        en: 'Packaging',
      },
      size: 'small',
    },
    {
      id: 6,
      emoji: '🐟',
      caption: {
        ru: 'Готовый продукт',
        en: 'Finished product',
      },
      size: 'large',
    },
  ];

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-28 bg-cream overflow-hidden"
    >
      {/* Декоративный элемент */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-fire/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-smoke/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="font-display font-bold text-smoke text-3xl md:text-5xl lg:text-6xl mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-smoke/60 text-lg md:text-xl max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Сетка галереи */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                image.size === 'large'
                  ? 'col-span-2 row-span-2'
                  : 'col-span-1'
              }`}
            >
              {/* Фото (заглушка) */}
              <div className="w-full h-full min-h-[200px] md:min-h-[250px] bg-gradient-to-br from-smoke-light to-smoke-dark flex items-center justify-center group-hover:from-fire/20 group-hover:to-smoke-dark transition-all duration-500">
                <span className="text-6xl md:text-7xl group-hover:scale-125 transition-transform duration-500">
                  {image.emoji}
                </span>
              </div>

              {/* Подпись */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium text-sm md:text-base">
                  {i18n.language === 'ru' ? image.caption.ru : image.caption.en}
                </p>
              </div>

              {/* Иконка лупы */}
              <div className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}