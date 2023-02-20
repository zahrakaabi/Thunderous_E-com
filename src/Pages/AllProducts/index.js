/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages

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
  /* ********** RENDERING ************* */
  return (
    <>
      <SEO
        title='All Products | E-commerce'
        description='Ecommerce website that sells cosmetics products'
        name='Products'
      />

      <div className="product-details-container">
        <AllProductsMenu />
        <ProductCard />
      </div>
    </>
  );
}

export default AllProductsPage;