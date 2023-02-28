/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { Link } from 'react-router-dom';

// Context
import { useCartValue } from '../../Context/CartContextProvider';

// SEO
import SEO from '../../Shared/SEO';

// Styles
import './index.css';

/* ------------------------------------ */
/*          PRODUCT DETAILS PAGE        */
/* ------------------------------------ */ 
function CartPage() {
  // Context
  const { cartItems, product } = useCartValue();

  // Increment Product Quantity if its duplicated
  const PRODUCT_DUPLICATED = cartItems?.find((item) => {
    const { id } = item;
    return id === product?.id;
  });

  // filter cartItems from duplication
  const FILTRED_CART = cartItems?.filter((item) => {
    const { id } = item;
    return id !== product?.id;
  });

  console.log('tada duplicated', PRODUCT_DUPLICATED);

  /* ********** RENDERING ************* */
  return (
    <>
      <SEO
        title='Cart | Thunderous'
        description='Ecommerce website that sells cosmetics products'
        name='cart'
      />

      <div className="cart-page-container container">
        <div className="go-to-shop">
          <h1>YOUR PURCHASES</h1>
          <Link to="/Shop">
            <h2 className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 3h-7.21a2 2 0 0 0-1.987 1.779L10 12H4a2 2 0 0 0 0 4h12l-1.212 3.03a2.001 2.001 0 0 0 1.225 2.641l.34.113a.998.998 0 0 0 1.084-.309l4.332-5.197c.149-.179.231-.406.231-.64V5a2 2 0 0 0-2-2z"></path>
              </svg>
              Go Back To Shop
            </h2>
          </Link>
        </div>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {FILTRED_CART?.map((product) => {
              const { id, image, name, price } = product;
              return (
                <tr key={id}>
                  <td className='cart-item-page'>
                    <div className="cart-product-page flex">
                      <img className="cart-product-page__img" src={image} alt={name} />
                      <div className="cart-product-page__content">
                        <h1>{`${name} | THUNDEROUS`}</h1>
                        <h3>{`$${price}`}</h3>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="item-quantity flex items-center">
                      <button type="button">-</button>
                      <div className="item_Qty flex justify-center items-center">1</div>
                      <button type="button">+</button>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path>
                        <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path>
                      </svg>
                    </div>
                  </td>

                  <td>{`$${price}`}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div className="subtotal flex flex-column items-end">
          <div className="subtotal-calc flex items-center">
            <h1>subtotal</h1>
            <h2>$28</h2>
          </div>
          <button className="flex justify-center items-center" type="button">Checkout</button>
        </div>
      </div>
    </>
  );
}

export default CartPage;