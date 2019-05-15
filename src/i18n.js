import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector"
// import Backend from 'i18next-xhr-backend';
import translations_en from './locales/en/translations.json'
import translations_pt from './locales/pt/translations.json'
import translations_es from './locales/es/translations.json'

i18n
    // .use(Backend)
    // .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: 'en',  // language to use
        resources: {
            en: { translation: translations_en },
            pt: { translation: translations_pt },
            es: { translation: translations_es }
        },
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;