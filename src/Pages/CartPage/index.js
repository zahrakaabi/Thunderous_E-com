/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
// UI Local Pages

// SEO
import SEO from '../../Shared/SEO';

// Styles
import './index.css';

/* ------------------------------------ */
/*          PRODUCT DETAILS PAGE        */
/* ------------------------------------ */ 
function CartPage() {
  /* ********** RENDERING ************* */
  return (
    <>
      <SEO
        title='Cart | Thunderous'
        description='Ecommerce website that sells cosmetics products'
        name='cart'
      />

      <div className="cart-container">
        hello cart page
      </div>
    </>
  );
}

export default CartPage;