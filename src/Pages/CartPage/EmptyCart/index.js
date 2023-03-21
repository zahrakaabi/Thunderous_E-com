/* ------------------------------------------ */
/*                 DEPENDENCIES               */
/* ------------------------------------------ */
// Packages
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Styles
import './index.css';

/* ------------------------------------------ */
/*                  EMPTY CART                */
/* ------------------------------------------ */
function EmptyCart() {
  const navigate = useNavigate();

  // translation
  const { t } = useTranslation('common');

  /* ************ RENDERING ***************** */
  return (
    <div className="empty-cart flex flex-column items-center justify-center">
        <h1>{t('empty_cart.message')}</h1>
        <button onClick={() => navigate('/Shop')}>{t('empty_cart.Go_TO_SHOP')}</button>
    </div>
  )
}

export default EmptyCart;