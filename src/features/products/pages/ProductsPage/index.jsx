/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";

// UI Local Components
import ProductCard from "../../components/product-card";
import ProductsFilters from "../../components/product-filters";
import { Loader, Pagination } from "../../../../components";

// Utils
import { useDebounce, useProducts } from '../../../../hooks';

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                           PRODUCTS PAGE COMPONENT                          */
/* -------------------------------------------------------------------------- */
const PRODUCTS_PER_PAGE = 12;

function ProductsPage() {
/* ---------------------------------- HOOKS --------------------------------- */
  const [page, setPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const { data: products = [], isLoading } = useProducts();
  const [params] = useSearchParams();
  const search = params.get("q")?.toLowerCase() ?? "";
  const debouncedSearch = useDebounce(search, 300);
  
  // Reset page when filter or change changes
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, selectedFilter]);

/* ---------------------------------- MEMOS --------------------------------- */
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesFilter =
        selectedFilter === "all" ||
        product.type.toLowerCase().includes(selectedFilter);

      const matchesSearch =
        !debouncedSearch ||
        product.name.toLowerCase().includes(debouncedSearch);

      return matchesFilter && matchesSearch;
    });
  }, [products, debouncedSearch, selectedFilter]);

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts?.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredProducts, page]); 

/* -------------------------------- RENDERING ------------------------------- */
  if (isLoading) return <Loader />;

  return (
    <div className="products-page container cursor-auto">
      <ProductsFilters 
        selectedFilter={selectedFilter} 
        setSelectedFilter={setSelectedFilter} 
      />

      <AnimatePresence mode="popLayout">
        <motion.div
          className="products"
          layout
          key={`${selectedFilter}-${page}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </motion.div>
      </AnimatePresence>

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