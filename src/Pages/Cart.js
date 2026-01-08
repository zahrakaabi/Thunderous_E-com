/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Local Components
import { CartPage } from '../features';

// Utils
import { SEO } from '../lib';

/* -------------------------------------------------------------------------- */
/*                             CART PAGE COMPONENT                            */
/* -------------------------------------------------------------------------- */
function Cart() {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <>
        <SEO
            title='Cart | Thunderous'
            description='Ecommerce website that sells cosmetics products'
            name='cart'
        />
        <CartPage />
    </>
  )
};

export default Cart;