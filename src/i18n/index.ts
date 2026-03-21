import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './es.json';
import en from './en.json';

const resources = {
  es: { translation: es },
  en: { translation: en },
};

const savedLanguage = localStorage.getItem('lang') || 'es';

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

i18next.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng);
});

export default i18next;
