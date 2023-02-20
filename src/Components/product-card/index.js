/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
//import { useTranslation } from "react-i18next";

// Styles
import './index.css';

/* ------------------------------------ */
/*            PRODUCT CARD              */
/* ------------------------------------ */ 
function ProductCard() {
  // translation
  //const { t } = useTranslation('common');

  /* ********** RENDERING ************* */
  return (
    <div className="product-card">
        {/*<p>{t('product_detail.content')}</p>*/}  
        <h1>Hello product card</h1>
    </div>
  );
}

export default ProductCard;