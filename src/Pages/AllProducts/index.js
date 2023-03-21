/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

// UI Local Pages
import { AllProductsMenu, ProductCard, Pagination } from '../../Components';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(7);

  // Pagination
  const INDEX_OF_LAST_PRODUCT = currentPage * productsPerPage;
  const INDEX_OF_FIRST_PRODUCT = INDEX_OF_LAST_PRODUCT - productsPerPage;
  const CURRENT_PRODUCTS = filtredProducts?.slice(INDEX_OF_FIRST_PRODUCT, INDEX_OF_LAST_PRODUCT);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Previous Page
  const previousPage = () => {
    if (currentPage !== 1) {
       setCurrentPage(currentPage - 1);
    }
  };

  // Next Page
  const nextPage = () => {
      if (currentPage !== Math.ceil(filtredProducts?.length / productsPerPage)) {
         setCurrentPage(currentPage + 1);
      }
  };

  /* ********** RENDERING ************* */
  return (
    <>
      <SEO
        title='Shop | Thunderous'
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
            {CURRENT_PRODUCTS?.map((product) => <ProductCard product={product} key={product?.id} />)}
          </AnimatePresence>
        </motion.div>

        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={filtredProducts?.length}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>
    </>
  );
}

export default AllProductsPage;