/* ------------------------------------------- */
/*                 DEPENDENCIES                */
/* ------------------------------------------- */
// Packages
import { createContext, useContext, useState, useEffect } from 'react';

/* ------------------------------------------- */
/*              CONTEXT PROVIDERS              */
/* ------------------------------------------- */
// CREATE CONTEXT
const CartContext = createContext();

// CONTEXT PROVIDERS
export function CartProvider({ children }) {
  // STATES
  const [openCart, setOpenCart] = useState(false);
  const [cartItemsNumber, setCartItemsNumber] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [product, setProduct] = useState({});

  // Add to cart
  const closeCart = () => {
    setOpenCart(false);
  }

  // Add item to cart
  const addToCart = (product) => {
    setOpenCart(true);
    setProduct(product);

    const PRODUCT_EXIST = cartItems?.find((findProduct) => findProduct.id === product.id);
    if (PRODUCT_EXIST) {
      const NEW_CART_ITEMS = cartItems?.map((existedProduct) =>
        existedProduct.id === product.id ? {...PRODUCT_EXIST, inCart: PRODUCT_EXIST.inCart + 1} : existedProduct
      );
      setCartItems(NEW_CART_ITEMS);
      localStorage.setItem('cartItems', JSON.stringify(NEW_CART_ITEMS));
    } else {
      const NEW_CART_ITEMS = [...cartItems, {...product, inCart: 1}];
      setCartItems(NEW_CART_ITEMS);
      localStorage.setItem('cartItems', JSON.stringify(NEW_CART_ITEMS));
    }
  };

  // UseEffect
  useEffect(() => {
    // Set Items Number In Cart
    if (cartItems.length !== 0) {
      const IN_CART_ARRAY = cartItems?.map((product) => product?.inCart);
      const ITEMS_TOTAL_NUMBER = IN_CART_ARRAY?.reduce((acc, inCart) => acc + inCart);
      localStorage.setItem('cartItemsNumber', JSON.stringify(ITEMS_TOTAL_NUMBER));

      // Get Items Number In Cart
      const CART_ITEMS_NUMBER = localStorage.getItem('cartItemsNumber');
      const PARSED_CART_ITEMS_NUMBER = JSON.parse(CART_ITEMS_NUMBER);
      setCartItemsNumber(PARSED_CART_ITEMS_NUMBER);
    } else {
      localStorage.setItem('cartItemsNumber', JSON.stringify(0));
      setCartItemsNumber(0);
    };
  }, [cartItems, setCartItemsNumber]);

  /* ************** RENDERING ************* */
  return (
    <CartContext.Provider value={{ openCart, closeCart, cartItemsNumber, cartItems, setCartItems, product, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// CONTEXT HOOK
export const useCartValue = () => useContext(CartContext);