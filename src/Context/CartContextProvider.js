/* ------------------------------------------- */
/*                 DEPENDENCIES                */
/* ------------------------------------------- */
// Packages
import { createContext, useContext, useState } from 'react';

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
    setCartItems(() => [...cartItems, product]);
    setCartItemsNumber((prev) => prev + 1);
    setProduct(product);
    setOpenCart(true);
  }

  /* ************** RENDERING ************* */
  return (
    <CartContext.Provider value={{ openCart, closeCart, cartItemsNumber, cartItems, product, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// CONTEXT HOOK
export const useCartValue = () => useContext(CartContext);