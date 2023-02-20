/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// UI_Local Components
import Layout from './Layout';
import Loader from './Shared/loader';

// Styles
// Context
import { useAuthValue } from './Context/AuthContextProvider';


import './Shared/styles/global.css';
import './Shared/styles/variables.css';
import './Shared/styles/typography.css';

// Lazy UI Local Pages
/* ------------- HOME PAGE ------------ */
const Home = lazy(() => import('./Pages').then((module) => {
  return { default: module.Home };
}));
/* -------- PRODUCT DETAILS PAGE ------ */
const ProductDetailsPage = lazy(() => import('./Pages').then((module) => {
  return { default: module.ProductDetailsPage };
}));
/* ---------- PROFILE PAGE ------------ */
const Profile = lazy(() => import('./Pages').then((module) => {
  return { default: module.Profile };
}));
/* -------- ALL PRODUCTS PAGE --------- */
const AllProductsPage = lazy(() => import('./Pages').then((module) => {
  return { default: module.Profile };
}));

/* ------------------------------------ */
/*                    APP               */
/* ------------------------------------ */ 
function App() {
  //CONTEXT
  const { currentUser } = useAuthValue();

  /* ********** RENDERING ************* */
  return (
    <div className="App">
      <HelmetProvider>{/* CCR | SSR */}
        <Router>
          <Suspense fallback={<Loader />}>
            <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/products/:id" element={<ProductDetailsPage />} />
                  <Route path="/all-products" element={<AllProductsPage />} />
                  <Route path="/profile" element={currentUser?.emailVerified ? (<Profile />) : (<Navigate to='/' />)} />
                </Route>
                <Route path="*" element={<div><h2>404 Page not found etc</h2></div>} />
            </Routes>
          </Suspense>
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;

// @TO DO : Run the next line in the terminal
// npx json-server --watch data/db.json --port 3001 