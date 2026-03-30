/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { createContext, useEffect, useState } from "react";

// Utils
import { useBoolean } from '../../Hooks';

/* -------------------------------------------------------------------------- */
/*                          CREATE CART MODAL CONTEXT                         */
/* -------------------------------------------------------------------------- */
export const CartModalContext = createContext();

/* -------------------------------------------------------------------------- */
/*                             CART MODAL PROVIDER                            */
/* -------------------------------------------------------------------------- */
function CartModalProvider({ children }) {
/* ---------------------------------- HOOKS --------------------------------- */
  const cartModal = useBoolean();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!cartModal.value) return;
    const timer = setTimeout(() => {
      cartModal.onFalse();
    }, 4000);
    return () => clearTimeout(timer);
  }, [cartModal]);

/* --------------------------------- CONSTS --------------------------------- */
  const addProduct = (product) => {
    setProduct(product);
    cartModal.onTrue();
  };

  const value= {
    cartModal,
    addProduct,
    product
  };

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <CartModalContext.Provider value={value}>
      {children}
    </CartModalContext.Provider>
  )
};

export default CartModalProvider;