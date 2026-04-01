/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Utils
import { useCart } from '../../hooks';
import { useCartModal } from '../../../../Hooks';
import { FormatCurrency }from '../../../../helpers';

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                            CART MODAL COMPONENT                            */
/* -------------------------------------------------------------------------- */
function CartModal() {
/* ---------------------------------- HOOKS --------------------------------- */
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { cartModal, product } = useCartModal();

/* --------------------------------- CONSTS --------------------------------- */
  const { t } = useTranslation('common');
  const { name, image, price } = product;
  const handleNavigate = (link) => {
    cartModal.onFalse();
    navigate(link);
  };

/* -------------------------------- RENDeRING ------------------------------- */
  return (
    <>
        {cartModal.value && <div className="cart-modal">
            <button type="button" 
            className="close-modal cursor-pointer" 
            data-dismiss="modal" 
            aria-label="Close"
            onClick={cartModal.onFalse}>
                <span aria-hidden="true">&times;</span>
            </button>
            <div className="cart">
                <h5 className="cart__added flex items-center">
                    <svg viewBox="0 0 24 24">
                        <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                    </svg>
                    <span>{t('cart_modal.added_item')}</span>
                </h5>
                <div className="cart__item flex items-center">
                    <img src={image} alt={name} />
                    <h4>
                        {`${name} | THUNDEROUS`}
                        <br/>
                        <span>{FormatCurrency(price)}</span>
                    </h4>
                </div>
                <button className="cursor-pointer transition w-full"
                type="button"
                title={t('cart_modal.view_cart')}
                aria-label={t('cart_modal.view_cart')}
                onClick={() => handleNavigate('/cart')}>
                    <span>{`${t('cart_modal.view_cart')} (${cartCount})`}</span>
                </button>
                <button className="cursor-pointer transition w-full" 
                type="button"
                title={t('cart_modal.continue_shopping')}
                aria-label={t('cart_modal.continue_shopping')}
                onClick={() => handleNavigate('/shop')}>
                    <span>{t('cart_modal.continue_shopping')}</span>
                </button>
            </div>
        </div>}
    </>
  )
};

export default CartModal;