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
  const [cartItemsNumber, setCartItemsNumber] = useState(0);

  /* ************** RENDERING ************* */
  return (
    <CartContext.Provider value={{ cartItemsNumber, setCartItemsNumber }}>
      {children}
    </CartContext.Provider>
  );
}

// CONTEXT HOOK
export const useCartValue = () => useContext(CartContext);