/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';

// UIL ocal Components
import App from './App';

// Context
import { ContextProvider } from './Context/ContextProvider';

/* ------------------------------------ */
/*                    APP               */
/* ------------------------------------ */ 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

