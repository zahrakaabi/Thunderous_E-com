/* ------------------------------------------ */
/*                 DEPENDENCIES               */
/* ------------------------------------------ */
// Packages
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Styles
import './index.scss';

/* ------------------------------------------ */
/*                  EMPTY CART                */
/* ------------------------------------------ */
function EmptyCart() {
  const navigate = useNavigate();

  // translation
  const { t } = useTranslation('common');

  /* ************ RENDERING ***************** */
  return (
    <div className="empty-cart flex flex-column items-center justify-center w-full">
        <h2 className="empty-cart__title">{t('empty_cart.message')}</h2>
        <button className="empty-cart__button cursor-pointer"
        title={t('empty_cart.Go_TO_SHOP')}
        aria-label={t('empty_cart.Go_TO_SHOP')}
        onClick={() => navigate('/shop')}>
          {t('empty_cart.Go_TO_SHOP')}
        </button>
    </div>
  )
}

export default EmptyCart;