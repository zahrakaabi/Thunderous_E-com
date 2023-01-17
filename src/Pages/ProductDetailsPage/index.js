/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";

// UI Local Pages
import { ProductDetails } from '../../Components';

// Styles
import './index.css';

/* ------------------------------------ */
/*          PRODUCT DETAILS PAGE        */
/* ------------------------------------ */ 
function ProductDetailsPage() {
  const queryClient = new QueryClient();

  /* ********** RENDERING ************* */
  return (
    <div className="product-details-container">
        <QueryClientProvider client={queryClient}>
          <ProductDetails />
        </QueryClientProvider>
    </div>
  );
}

export default ProductDetailsPage;