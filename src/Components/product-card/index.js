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
function ProductCard({ product }) {
  // translation
  //const { t } = useTranslation('common');

  const { price, name, image } = product ? product : '';

  /* ********** RENDERING ************* */
  return (
    <div className="product-card">
      <div className="product-card__content flex justify-between">
        <h5>{name}</h5>
        <h5>{price}</h5>
      </div>
      <div className="product-card__img">
        <img src={image} alt={name} />
      </div>
      <button className="product-card__CTA-button flex justify-center items-center" 
        type="button"
        title="Add produt to your cart"
      >+</button>
    </div>
  );
}

export default ProductCard;