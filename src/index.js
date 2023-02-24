/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';

// UIL ocal Components
import App from './App';
import * as serviceWorker from "./serviceWorkerRegistration";

// Context
import { AuthProvider } from './Context/AuthContextProvider';
import { ContextProvider } from './Context/ContextProvider';
import { CartProvider } from './Context/CartContextProvider';

/* ------------------------------------ */
/*                    APP               */
/* ------------------------------------ */ 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ContextProvider>
    </AuthProvider>
  </React.StrictMode>
);

serviceWorker.register();