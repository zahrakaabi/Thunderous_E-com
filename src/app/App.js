/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// UI_Local Components
import Layout from '../layout/Layout';
import { Loader } from '../Components';

// Context
import { CartProvider, CartModalProvider, AuthProvider } from '../Context';

// Lazy UI Local Pages
import { Home, ProductDetails, Products, Cart } from '../routes/lazyRoutes';

// Styles
import '../styles/global.scss';
import '../styles/variables.scss';
import '../styles/typography.scss';

/* ------------------------------------ */
/*                    APP               */
/* ------------------------------------ */ 
function App() {
  /* ********** RENDERING ************* */
  return (
    <div className="App">
      <HelmetProvider> {/* CCR | SSR */}
        <AuthProvider>
          <CartProvider>
            <CartModalProvider>
              <Router>
                <Suspense fallback={<Loader />}>
                  <Routes>
                      <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<Products />} />
                        <Route path="/shop/:id" element={<ProductDetails />} />
                        <Route path="/cart" element={<Cart />} />
                      </Route>
                      <Route path="*" element={<div><h2>404 Page not found etc</h2></div>} />
                  </Routes>
                </Suspense>
              </Router>
            </CartModalProvider>
          </CartProvider>
        </AuthProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;

// @TO DO : Run the next line in the terminal
// npx json-server --watch data/db.json --port 3001 