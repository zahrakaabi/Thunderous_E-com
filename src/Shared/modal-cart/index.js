/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Context
import { useCartValue } from '../../Context/CartContextProvider';

// UI Local Components
import Cart from './cart';

// Styles
import './index.css';

/* ------------------------------------ */
/*                 HEADER               */
/* ------------------------------------ */
function ModalCart() {
    // Context
    const { closeCart } = useCartValue();

    /* ********** RENDERING *********** */
    return (
        <div className="cart-modal">
            <button type="button" 
                    className="modal-close-button" 
                    data-dismiss="modal" 
                    aria-label="Close" 
                    onClick={closeCart}>
                <span aria-hidden="true">&times;</span>
            </button>
            <Cart  />
        </div>
    );
}

export default ModalCart;