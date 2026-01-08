/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// UI Local Components
import ProductCard from "../../components/product-card";
import ProductsFilters from "../../components/product-filters";
import { Pagination } from "../../../../components";

// Utils
import { useProducts } from '../../../../hooks';

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                           PRODUCTS PAGE COMPONENT                          */
/* -------------------------------------------------------------------------- */
function ProductsPage() {
/* ---------------------------------- HOOKS --------------------------------- */
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [page, setPage] = useState(1);
  
  // Reset page when filter changes
  useEffect(() => {
    setPage(1);
  }, [selectedFilter]);

/* --------------------------------- CONSTS --------------------------------- */
  const PRODUCTS_PER_PAGE = 12;
  const { data: products } = useProducts();

  const filteredProducts = useMemo(() => {
    if (selectedFilter === 'all') return products;
    return products.filter((product)=> product.type.toLowerCase().includes(selectedFilter));
  }, [products, selectedFilter]);

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts?.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, page]); 

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="products-page container cursor-auto">
      <ProductsFilters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <motion.div className="products" layout>
        <AnimatePresence>
          {paginatedProducts?.map((product) => <ProductCard product={product} key={product.id} />)}
        </AnimatePresence>
      </motion.div>
      <Pagination
        currentPage={page}
        totalItems={filteredProducts?.length}
        itemsPerPage={PRODUCTS_PER_PAGE}
        onPageChange={setPage}
      />
    </div>
  )
};

export default ProductsPage;