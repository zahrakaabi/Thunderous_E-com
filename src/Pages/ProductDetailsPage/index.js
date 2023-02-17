/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages

// UI Local Pages
import { ProductDetails } from '../../Components';

// SEO
import SEO from '../../Shared/SEO';

// Styles
import './index.css';

/* ------------------------------------ */
/*          PRODUCT DETAILS PAGE        */
/* ------------------------------------ */ 
function ProductDetailsPage() {
  /* ********** RENDERING ************* */
  return (
    <>
      <SEO
        title='Product | E-commerce'
        description='Ecommerce website that sells cosmetics products'
        name='home'
      />

      <div className="product-details-container">
        <ProductDetails />
      </div>
    </>
  );
}

export default ProductDetailsPage;