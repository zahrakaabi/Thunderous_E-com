/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages

// UI Local Pages
import { AllProductsMenu, ProductCard } from '../../Components';

// SEO
import SEO from '../../Shared/SEO';

// Hooks
import useProducts from '../../Hooks/useProducts';

// Styles
import './index.css';

/* ------------------------------------ */
/*           ALL PRODUCTS PAGE          */
/* ------------------------------------ */ 
function AllProductsPage() {
  // Hooks 
  const products = useProducts();

  /* ********** RENDERING ************* */
  return (
    <>
      <SEO
        title='All Products | E-commerce'
        description='Ecommerce website that sells cosmetics products'
        name='Products'
      />

      <div className="container all-products">
        <AllProductsMenu />
        <div className="products-wrapper">
          {products?.map((product) => {
            const { id } = product;
            return <div key={id}><ProductCard product={product} /></div>
          })}
        </div>
      </div>
    </>
  );
}

export default AllProductsPage;