/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

// UI Local Pages
import { AllProductsMenu, ProductCard } from '../../Components';

// SEO
import SEO from '../../Shared/SEO';

// Styles
import './index.css';

/* ------------------------------------ */
/*           ALL PRODUCTS PAGE          */
/* ------------------------------------ */ 
function AllProductsPage() {
  // States
  const [filtredProducts, setFiltredProducts] = useState();
  const [active, setActive] = useState('All');

  /* ********** RENDERING ************* */
  return (
    <>
      <SEO
        title='All Products | E-commerce'
        description='Ecommerce website that sells cosmetics products'
        name='Products'
      />

      <div className="container all-products">
        <AllProductsMenu 
          active={active} 
          setActive={setActive} 
          setFiltredProducts={setFiltredProducts} 
        />

        <motion.div className="products-wrapper" layout>
          <AnimatePresence>
            {filtredProducts?.map((product) => <ProductCard product={product} key={product?.id} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

export default AllProductsPage;