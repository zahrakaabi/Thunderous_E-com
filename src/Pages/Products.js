/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Local Components
import { ProductsPage } from "../features";

// SEO
import { SEO } from "../lib";

/* -------------------------------------------------------------------------- */
/*                             PRODUCTS COMPONENT                             */
/* -------------------------------------------------------------------------- */
function Products() {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <>
      <SEO
        title='Shop | Thunderous'
        description='Ecommerce website that sells cosmetics products'
        name='Products'
      />
      <ProductsPage />
    </>
  )
};

export default Products;