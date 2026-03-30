/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

// Translation
import { common_en, common_fr } from "../locales/index";

/* ------------------------------------ */
/*             TRANSLATION              */
/* ------------------------------------ */
const resources = {
    en: { common: common_en },
    fr: { common: common_fr },
};

const detection = {
    lookupFromPathIndex: 0,
    checkWhitelist: true
};

i18n.use(detector)
    .use(initReactI18next)
    .init({
        saveMissing: true, // send not translated keys to endpoint
        interpolation: { escapeValue: false },// React already does escaping
        lng: 'en',// language to use
        fallbackLng: 'en', // use en if detected lng is not available
        resources,
        detection,
        whitelist: ['fr', 'en'],
        defaultNS: 'common'
    });

export default i18n;