/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// UI Local Components
import Layout from './Layout';

// Styles
import './Shared/styles/global.css';
import './Shared/styles/variables.css';
import './Shared/styles/typography.css';

// Lazy UI Local Pages
/* ------------- HOME PAGE ------------ */
const Home = lazy(() => import('./Pages').then((module) => {
  return { default: module.Home };
}));

/* -------- PRODUCT DETAILS PAGE ------ */
const ProductDeatils = lazy(() => import('./Pages').then((module) => {
  return { default: module.ProductDeatils };
}));

// @TO DO : Run the next line in the terminal
// npx json-server --watch data/db.json --port 3001 
/* ------------------------------------ */
/*                    APP               */
/* ------------------------------------ */ 
function App() {
  /* ********** RENDERING ************* */
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<ProductDeatils />} />
              </Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
