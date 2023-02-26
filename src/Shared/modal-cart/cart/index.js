/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useTranslation } from "react-i18next";

// Context
import { useCartValue } from '../../../Context/CartContextProvider';

// Styles
import './index.css';

/* ------------------------------------ */
/*                 HEADER               */
/* ------------------------------------ */
function Cart() {
    // CONTEXT
    const { closeCart, cartItems, product } = useCartValue();
    const { name, image } = product ? product : '';
    
    // translation
    const { t, i18n } = useTranslation('common');

    /* ********** RENDERING *********** */
    return (
        <div className="cart-wrapper">
            <h6>check icon item added to your cart</h6>
            <div className="cart-item flex">
                <img src={image} alt={name} />
                <h1>{`${name} | THUNDEROUS`}</h1>
            </div>
            <button type="button">{`View my cart (${cartItems.length})`}</button>
            <button type="button" onClick={closeCart}>Continue Shopping</button>
        </div>
    );
}

export default Cart;