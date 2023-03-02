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

  // Add to cart
  const addToCart = (product) => {

    setProduct(product);
    setCartItems(() => [...cartItems, product]);

    const PRODUCT_INDEX = cartItems?.indexOf(product);
    if (cartItems) {
      cartItems[PRODUCT_INDEX].inCart += 1
    };
    setCartItems(() => [...cartItems]);

    setProduct(product);
    //setCartItems(() => [...cartItems, product]);
    setCartItemsNumber((prev) => prev + 1);
    setOpenCart(true);
  };

  console.log('product', product);
  console.log('cart items', cartItems);

  /* ************** RENDERING ************* */
  return (
    <CartContext.Provider value={{ openCart, closeCart, cartItemsNumber, cartItems, setCartItems, product, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// CONTEXT HOOK
export const useCartValue = () => useContext(CartContext);