/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

// UIL ocal Components
import App from './App';

// Context
import { ContextProvider } from './Context/ContextProvider';

// translation

// Translation
import common_en from './Locales/en/common.json';
import common_fr from './Locales/fr/common.json';

i18next.init({
  interpolation: { escapeValue: false },// React already does escaping
  lng: 'en',// language to use
  resources: {
    en: { common: common_en },
    fr: { common: common_fr },
  },
});

/* ------------------------------------ */
/*                    APP               */
/* ------------------------------------ */ 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </I18nextProvider>
  </React.StrictMode>
);

