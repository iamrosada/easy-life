import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptUI from '@/locales/pt/ui.json';
import enUI from '@/locales/en/ui.json';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    returnNull: false,
    resources: {
      en: {
        ui: enUI,
      },
      pt: {
        ui: ptUI,
      },
    },
  });

export default i18n;
