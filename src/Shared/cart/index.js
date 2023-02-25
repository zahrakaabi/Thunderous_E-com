/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useTranslation } from "react-i18next";

// Context
import { useCartValue } from '../../Context/CartContextProvider';

// UI Local Components
import { Modal } from '../../Shared/pageHeader/Authentification';

// Styles
import './index.css';

/* ------------------------------------ */
/*                 HEADER               */
/* ------------------------------------ */
function Cart({ openModal, toggle }) {
    // CONTEXT
    const { cartItemsNumber } = useCartValue();
    
    // translation
    const { t, i18n } = useTranslation('common');

    /* ********** RENDERING *********** */
    return (
        <div className="cart-modal">
            <button type="button" 
                    className="modal-close-button" 
                    data-dismiss="modal" 
                    aria-label="Close" 
                    onClick={toggle}>
                <span aria-hidden="true">&times;</span>
            </button>
            map carItems array here
        </div>
    );
}

export default Cart;