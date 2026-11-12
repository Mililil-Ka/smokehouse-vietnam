import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export default function Products() {
  const { t } = useTranslation();

  // Временные данные товаров (потом можно вынести в отдельный файл)
  const products = [
    {
      id: 1,
      icon: '🐟',
      name: {
        ru: 'Скумбрия холодного копчения',
        en: 'Cold smoked mackerel',
      },
      description: {
        ru: 'Нежное мясо, классический посол, натуральная щепа',
        en: 'Tender meat, classic salting, natural wood chips',
      },
      price: '250,000',
      badge: 'Hit',
    },
    {
      id: 2,
      icon: '🐠',
      name: {
        ru: 'Тунец холодного копчения',
        en: 'Cold smoked tuna',
      },
      description: {
        ru: 'Плотная текстура, насыщенный вкус дыма',
        en: 'Dense texture, rich smoke flavour',
      },
      price: '350,000',
      badge: 'Premium',
    },
    {
      id: 3,
      icon: '🐟',
      name: {
        ru: 'Лосось холодного копчения',
        en: 'Cold smoked salmon',
      },
      description: {
        ru: 'Деликатес для праздничного стола',
        en: 'Delicacy for a festive table',
      },
      price: '450,000',
      badge: 'Top',
    },
    {
      id: 4,
      icon: '🐡',
      name: {
        ru: 'Скумбрия с перцем',
        en: 'Mackerel with pepper',
      },
      description: {
        ru: 'Для любителей остренького',
        en: 'For spicy lovers',
      },
      price: '270,000',
      badge: 'New',
    },
    {
      id: 5,
      icon: '🦈',
      name: {
        ru: 'Рыбное ассорти',
        en: 'Fish assortment',
      },
      description: {
        ru: 'Набор из 3 видов рыбы для дегустации',
        en: 'Set of 3 fish types for tasting',
      },
      price: '500,000',
      badge: 'Set',
    },
    {
      id: 6,
      icon: '🐟',
      name: {
        ru: 'Масляная рыба',
        en: 'Butterfish',
      },
      description: {
        ru: 'Тает во рту, нежный вкус',
        en: 'Melts in your mouth, delicate taste',
      },
      price: '300,000',
      badge: '',
    },
  ];

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="products"
      className="relative py-20 md:py-28 bg-smoke overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-fire/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fire/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20">
          <p className="text-fire font-medium text-sm md:text-base mb-3 tracking-widest uppercase">
            Our Products
          </p>
          <h2 className="font-display font-bold text-cream text-3xl md:text-5xl lg:text-6xl mb-4">
            {t('products.title')}
          </h2>
          <p className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-smoke-light rounded-3xl overflow-hidden border border-cream/10 hover:border-fire/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-fire/20"
            >
              <div className="relative h-56 md:h-64 bg-gradient-to-br from-smoke-light to-smoke-dark flex items-center justify-center overflow-hidden">
                <span className="text-7xl md:text-8xl group-hover:scale-125 transition-transform duration-500">
                  {product.icon}
                </span>
                
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-fire text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-display font-bold text-cream text-xl md:text-2xl mb-2 group-hover:text-fire transition-colors">
                  {i18n.language === 'ru' ? product.name.ru : product.name.en}
                </h3>
                
                <p className="text-cream/50 text-sm md:text-base mb-4 min-h-[40px]">
                  {i18n.language === 'ru' ? product.description.ru : product.description.en}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-cream/40 text-xs mb-1">{t('products.price')}</p>
                    <p className="font-display font-bold text-fire text-xl md:text-2xl">
                      {product.price} <span className="text-sm">{t('products.currency')}</span>
                    </p>
                  </div>

                  <button
                    onClick={scrollToContacts}
                    className="bg-fire hover:bg-fire-dark text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full font-medium text-sm transition-all hover:scale-105 cursor-pointer"
                  >
                    {t('products.order')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-cream/40 text-sm">
            * {t('products.note') || 'Цены указаны за 1 кг. Возможен заказ от 500 г.'}
          </p>
        </div>
      </div>
    </section>
  );
}