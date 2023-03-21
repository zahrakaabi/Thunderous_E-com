/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useEffect, useTransition } from 'react';

// Context
import { useCartValue } from '../../Context/CartContextProvider';

// SEO
import SEO from '../../Shared/SEO';

// UI Local Componenets
import EmptyCart from './EmptyCart';

// Helpers
import FormatCurrency from '../../Shared/Helpers/formatCurrency'; 

// Styles
import './index.css';

/* ------------------------------------ */
/*          PRODUCT DETAILS PAGE        */
/* ------------------------------------ */ 
function CartPage() {
  // Hooks
  const [isPending, startTransition] = useTransition(); 

  // Context
  const { cartItems, setCartItems, addToCart } = useCartValue();
  
  // translation
  const { t } = useTranslation('common');

  // Handle InCart
  /*const handleInCart = (product, qty) => {
    const PRODUCT_INDEX = cartItems?.indexOf(product);
    cartItems[PRODUCT_INDEX].inCart += qty;
    setCartItems(() => [...cartItems]);
    localStorage.setItem('cartItems', JSON.stringify(NEW_CART_ITEMS));
  }*/

  // Delete Product
  const deleteProduct = (id) => {
    const FILTRED_CART_ITEMS = cartItems?.filter((product) => product.id !== id);
    setCartItems(FILTRED_CART_ITEMS);
    localStorage.setItem('cartItems', JSON.stringify(FILTRED_CART_ITEMS));
  }

  // Handle products quantity in Cart
  const handleQuantityInCart = (id) => {
    const PRODUCT_EXIST = cartItems?.find((findProduct) => findProduct.id === id);
    if (PRODUCT_EXIST.inCart === 1) {
      const NEW_CART_ITEMS = cartItems?.filter((existedProduct) => existedProduct.id !== id);
      setCartItems(NEW_CART_ITEMS);
      localStorage.setItem('cartItems', JSON.stringify(NEW_CART_ITEMS));
    } else {
      const NEW_CART_ITEMS = cartItems?.map((item) => 
        item.id === id ? {...PRODUCT_EXIST, inCart: PRODUCT_EXIST.inCart - 1} : item
      );
      setCartItems(NEW_CART_ITEMS);
      localStorage.setItem('cartItems', JSON.stringify(NEW_CART_ITEMS));
    };
  };

  // Total Price
  const INITIAL_PRICE = 0;
  const TOTAL_PRICE = cartItems?.reduce((accumulator, product) => accumulator + product.inCart * product.price, INITIAL_PRICE); 

  // UseEffect
  useEffect(() => {
    const CART_ITEMS = localStorage.getItem('cartItems');
    const PARSED_CART_ITEMS = JSON.parse(CART_ITEMS);
    const GET_CART_ITEMS = CART_ITEMS ? PARSED_CART_ITEMS : [];
    // because it has low priority to load
    startTransition(() => {
      setCartItems(GET_CART_ITEMS);
    });
  }, [setCartItems]);

  /* ********** RENDERING ************* */
  return (
    <>
      <SEO
        title='Cart | Thunderous'
        description='Ecommerce website that sells cosmetics products'
        name='cart'
      />

      {cartItems.length === 0 ? <EmptyCart /> : (
      <div className="cart-page-container container">
        <div className="go-to-shop">
          <h1>{t('empty_cart.your_purchases')}</h1>
          <Link to="/Shop">
            <h2 className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 3h-7.21a2 2 0 0 0-1.987 1.779L10 12H4a2 2 0 0 0 0 4h12l-1.212 3.03a2.001 2.001 0 0 0 1.225 2.641l.34.113a.998.998 0 0 0 1.084-.309l4.332-5.197c.149-.179.231-.406.231-.64V5a2 2 0 0 0-2-2z"></path>
              </svg>
              {t('empty_cart.Go_TO_SHOP')}
            </h2>
          </Link>
        </div>

        <table>
          <thead>
            <tr>
              <th>{t('empty_cart.th_first')}</th>
              <th>{t('empty_cart.th_second')}</th>
              <th>{t('empty_cart.th_third')}</th>
            </tr>
          </thead>

            <tbody>
             {!isPending && cartItems ? cartItems.map((product) => {
              let { id, image, name, price, inCart } = product;
              if (inCart > 0) {
                return (
                  <tr key={id}>
                    <td className='cart-item-page'>
                      <div className="cart-product-page flex">
                        <img className="cart-product-page__img" src={image} alt={name} />
                        <div className="cart-product-page__content">
                          <h1>{`${name} | THUNDEROUS`}</h1>
                          <h3>{FormatCurrency(price)}</h3>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="item-quantity flex items-center">
                        <button type="button" onClick={() => handleQuantityInCart(id)}>-</button>
                        <div className="item_Qty flex justify-center items-center">{inCart}</div>
                        <button type="button" onClick={() => addToCart(product)}>+</button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={() => deleteProduct(id)}>
                          <path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path>
                          <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path>
                        </svg>
                      </div>
                    </td>

                    <td>{FormatCurrency(inCart * price)}</td>
                  </tr>
                );
              };
              return '';
              }) : <></>
             }
          </tbody>
        </table>

        <div className="subtotal flex flex-column items-end">
          <div className="subtotal-calc flex items-center">
            <h1>{t('empty_cart.subTotal')}</h1>
            <h2>{FormatCurrency(TOTAL_PRICE)}</h2>
          </div>
          <button className="flex justify-center items-center" type="button">Checkout</button>
        </div>
      </div>
      )}
    </>
  );
}

export default CartPage;