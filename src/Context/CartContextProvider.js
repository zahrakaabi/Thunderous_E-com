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
    } else {
      const NEW_CART_ITEMS = [...cartItems, {...product, inCart: 1}];
      setCartItems(NEW_CART_ITEMS);
    }
  };

  /* ************** RENDERING ************* */
  return (
    <CartContext.Provider value={{ openCart, closeCart, cartItemsNumber, cartItems, setCartItems, product, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// CONTEXT HOOK
export const useCartValue = () => useContext(CartContext);