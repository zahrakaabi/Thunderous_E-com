/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// UI Local Pages
import { ProductDetailsPage } from '../features';

// SEO
import SEO from '../lib/SEO';

/* ------------------------------------ */
/*          PRODUCT DETAILS PAGE        */
/* ------------------------------------ */ 
function ProductDetails() {
  /* ********** RENDERING ************* */
  return (
    <>
      <SEO
        title='Product | Thunderous'
        description='Ecommerce website that sells cosmetics products'
        name='home'
      />
      <ProductDetailsPage />
    </>
  );
}

export default ProductDetails;