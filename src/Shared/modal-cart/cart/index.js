/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Context
import { useCartValue } from '../../../Context/CartContextProvider';

// Styles
import './index.css';

/* ------------------------------------ */
/*                 HEADER               */
/* ------------------------------------ */
function Cart() {
    const navigate = useNavigate();
    const API_URL = process.env.REACT_APP_API_URL;

    // CONTEXT
    const { closeCart, cartItems, product } = useCartValue();
    const { name, image } = product ? product : '';
    
    // translation
    const { t } = useTranslation('common');

    // Navigate to cart page
    const navigateToCart = () => {
        navigate('/cart');
        closeCart();
    }

    /* ********** RENDERING *********** */
    return (
        <div className="cart-wrapper">
            <h5 className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                </svg>
                {t('cart_modal.added_item')}
            </h5>
            <div className="cart-item flex">
                <img src={`${API_URL}/${image}`} alt={name} />
                <h4>{`${name} | THUNDEROUS`}</h4>
            </div>
            <button type="button" onClick={navigateToCart}>{`${t('cart_modal.view_cart')} (${cartItems.length})`}</button>
            <button type="button" onClick={closeCart}>{t('cart_modal.continue_shopping')}</button>
        </div>
    );
}

export default Cart;