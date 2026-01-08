/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Styles
//
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                            CART MODAL COMPONENT                            */
/* -------------------------------------------------------------------------- */
function CartModal() {
/* --------------------------------- CONSTS --------------------------------- */
  const { t } = useTranslation('common');
  const API_URL = process.env.REACT_APP_API_URL;
  const { name, image } = product;
  const navigateToCart = () => {
    Navigate('/cart');
  };

/* -------------------------------- RENDeRING ------------------------------- */
  return (
    <div className="cart-modal">
        <button type="button" 
        className="modal-close-button" 
        data-dismiss="modal" 
        aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div className="cart">
            <h5 className="cart__title flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                </svg>
                {t('cart_modal.added_item')}
            </h5>
            <div className="cart__item flex">
                <img src={`${API_URL}/${image}`} alt={name} />
                <h4>{`${name} | THUNDEROUS`}</h4>
            </div>
            <button type="button" onClick={navigateToCart}>{`${t('cart_modal.view_cart')} (${cartItemsNumber})`}</button>
            <button type="button" onClick={closeCart}>{t('cart_modal.continue_shopping')}</button>
        </div>
    </div>
  )
};

export default CartModal;