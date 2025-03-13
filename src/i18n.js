import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'ar',
    interpolation: { escapeValue: false },
      resources: {
          ar: { translation: require('../public/locales/ar/common.json') },
              en: { translation: require('../public/locales/en/common.json') }
                }
                });

                export default i18n;