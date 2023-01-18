/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages

// UI Local Pages
import { ProductDetails } from '../../Components';

// Styles
import './index.css';

/* ------------------------------------ */
/*          PRODUCT DETAILS PAGE        */
/* ------------------------------------ */ 
function ProductDetailsPage() {
  /* ********** RENDERING ************* */
  return (
    <div className="product-details-container">
      <ProductDetails />
    </div>
  );
}

export default ProductDetailsPage;