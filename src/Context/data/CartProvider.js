/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { createContext, useReducer } from 'react';

/* -------------------------------------------------------------------------- */
/*                             CREATE CART CONTEXT                            */
/* -------------------------------------------------------------------------- */
export const CartContext = createContext(null);

/* -------------------------------------------------------------------------- */
/*                            CART REDUCER FUNCTION                           */
/* -------------------------------------------------------------------------- */
const CART_ACTIONS = {
  ADD: 'ADD_PRODUCT',
  REMOVE: 'REMOVE_PRODUCT',
  INCREMENT: 'INCREMENT_QTY',
  DECREMENT: 'DECREMENT_QTY',
  CLEAR: 'CLEAR_CART'
};

function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD:
      const product = action.payload;
      const existing = state.items[product.id];

      return {
        ...state,
        items: {
          ...state.items,
          [product.id]: {
            ...product,
            inCart: existing ? existing.inCart + 1 : 1
          }
        }
      };

    case CART_ACTIONS.REMOVE:
      const newItems = { ...state.items };
      delete newItems[action.payload]
      return { ...state, items: newItems }

    case CART_ACTIONS.INCREMENT:
      const incrementId = action.payload;
      if (!state.items[incrementId]) return state;
      return {
        ...state,
        items: {
          ...state.items,
          [incrementId]: {...state.items[incrementId], inCart: state.items[incrementId].inCart + 1}
        }
      };
    
    case CART_ACTIONS.DECREMENT:
      const decrementId = action.payload;
      if (!state.items[decrementId]) return state;

      if (state.items[decrementId].inCart === 1) {
        const newItems = { ...state.items };
        delete newItems[decrementId];
        return { ...state, items: newItems };
      }
      
      return {
        ...state,
        items: {
          ...state.items,
          [decrementId]: {...state.items[decrementId], inCart: state.items[decrementId].inCart - 1}
        }
      };

    case CART_ACTIONS.CLEAR:
      return { items: {} }

    default:
      return state;
  };
};

/* -------------------------------------------------------------------------- */
/*                                CART PROVIDER                               */
/* -------------------------------------------------------------------------- */
function CartProvider({ children }) {
/* ---------------------------------- HOOKS --------------------------------- */
  const [state, dispatch] = useReducer(cartReducer, { items : {} });

/* --------------------------------- CONSTS --------------------------------- */
  const cartItems = Object.values(state.items);

  const value = {
    cart: cartItems,
    cartCount: cartItems.reduce((total, item) => total + item.inCart, 0),
    totalPrice: cartItems.reduce((sum, item) => sum + item.price * item.inCart, 0),
    
    addProduct: (product) => dispatch({ type: CART_ACTIONS.ADD, payload: product }),
    incrementQuantity: (id) => dispatch({ type: CART_ACTIONS.INCREMENT, payload: id }),
    decrementQuantity: (id) => dispatch({ type: CART_ACTIONS.DECREMENT, payload: id }),
    removeProduct: (id) => dispatch({ type: CART_ACTIONS.REMOVE, payload: id }),
    clearCart: () => dispatch({ type: CART_ACTIONS.CLEAR }),
    isInCart: (id) => Boolean(state.items[id]),
  };

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;