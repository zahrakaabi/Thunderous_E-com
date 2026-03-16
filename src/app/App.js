/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// UI_Local Components
import Layout from '../layout/Layout';
import { Loader } from '../components';

// Context
import { CartProvider, CartModalProvider } from '../context';

// Styles
import '../styles/global.scss';
import '../styles/variables.scss';
import '../styles/typography.scss';

// Lazy UI Local Pages
/* ------------- HOME PAGE ------------ */
const Home = lazy(() => import('../pages').then((module) => {
  return { default: module.Home };
}));
// /* -------- PRODUCT DETAILS PAGE ------ */
const ProductDetails = lazy(() => import('../pages').then((module) => {
  return { default: module.ProductDetails };
}));
// /* -------- ALL PRODUCTS PAGE --------- */
const Products = lazy(() => import('../pages').then((module) => {
  return { default: module.Products };
}));
// /* ----------- CART PAGE -------------- */
const Cart = lazy(() => import('../pages').then((module) => {
  return { default: module.Cart };
}));

/* ------------------------------------ */
/*                    APP               */
/* ------------------------------------ */ 
function App() {
  /* ********** RENDERING ************* */
  return (
    <div className="App">
      <HelmetProvider>{/* CCR | SSR */}
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
      </HelmetProvider>
    </div>
  );
}

export default App;

// @TO DO : Run the next line in the terminal
// npx json-server --watch data/db.json --port 3001 