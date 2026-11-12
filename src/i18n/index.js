import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      "nav.home": "Главная",
      "nav.about": "О нас",
      "nav.products": "Продукция",
      "nav.gallery": "Галерея",
      "nav.contacts": "Контакты",

      "hero.title": "Крафтовое холодное копчение во Вьетнаме",
      "hero.subtitle": "Натуральная рыба, копчёная по классическим технологиям. Без жидкого дыма и консервантов.",
      "hero.btn": "Смотреть продукцию",
      "hero.badge": "100% Натурально • Ручная работа",

      "about.title": "Почему выбирают нас",
      "about.subtitle": "Мы делаем продукт, который сами едим с удовольствием",
      "about.card1.title": "Натуральное сырьё",
      "about.card1.text": "Только свежая рыба из утреннего улова",
      "about.card2.title": "Классическая технология",
      "about.card2.text": "Холодное копчение на натуральной щепе",
      "about.card3.title": "Без химии",
      "about.card3.text": "Никакого жидкого дыма и усилителей вкуса",

      "products.title": "Наша продукция",
      "products.subtitle": "Позиции, которые доступны на этой неделе",
      "products.price": "Цена",
      "products.order": "Заказать",
      "products.currency": "₫", 
      "products.note": "Цены указаны за 1 кг. Возможен заказ от 500 г.",

      "gallery.title": "Как мы работаем",
      "gallery.subtitle": "Каждая партия — это ручной труд и внимание к деталям",

      "contacts.title": "Свяжитесь с нами",
      "contacts.subtitle": "Ответим в течение 15 минут в рабочее время",
      "contacts.phone": "Позвонить",
      "contacts.zalo": "Написать в Zalo",
      "contacts.telegram": "Написать в Telegram",
      "contacts.facebook": "Мы в Facebook",
      "contacts.address": "Адрес",
      "contacts.hours": "Часы работы",
      "contacts.cta": "Заказать сейчас",

      "footer.rights": "Все права защищены",
      "footer.description": "Крафтовое холодное копчение рыбы во Вьетнаме. Натуральные продукты, классические технологии, ручная работа.",
      "footer.navigation": "Навигация",
      "footer.contacts": "Контакты",
    },
  },
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.products": "Products",
      "nav.gallery": "Gallery",
      "nav.contacts": "Contacts",

      "hero.title": "Craft Cold Smoking in Vietnam",
      "hero.subtitle": "Natural fish, smoked using classical technology. No liquid smoke or preservatives.",
      "hero.btn": "View products",
      "hero.badge": "100% Natural • Handmade",

      "about.title": "Why choose us",
      "about.subtitle": "We make the product we enjoy eating ourselves",
      "about.card1.title": "Natural ingredients",
      "about.card1.text": "Only fresh fish from the morning catch",
      "about.card2.title": "Classical technology",
      "about.card2.text": "Cold smoking on natural wood chips",
      "about.card3.title": "No chemicals",
      "about.card3.text": "No liquid smoke or flavour enhancers",

      "products.title": "Our products",
      "products.subtitle": "Available this week",
      "products.price": "Price",
      "products.order": "Order now",
      "products.currency": "₫",
      "products.note": "Prices are per 1 kg. Minimum order from 500 g.",

      "gallery.title": "How we work",
      "gallery.subtitle": "Every batch is handmade with attention to detail",

      "contacts.title": "Contact us",
      "contacts.subtitle": "We respond within 15 minutes during working hours",
      "contacts.phone": "Call us",
      "contacts.zalo": "Message on Zalo",
      "contacts.telegram": "Message on Telegram",
      "contacts.facebook": "Find us on Facebook",
      "contacts.address": "Address",
      "contacts.hours": "Working hours",
      "contacts.cta": "Order now",

      "footer.rights": "All rights reserved",
      "footer.description": "Craft cold smoking of fish in Vietnam. Natural products, classical technologies, handmade.",
      "footer.navigation": "Navigation",
      "footer.contacts": "Contacts",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru', 
  fallbackLng: 'en', 
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;