/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

// Styles
import './index.css';

/* ------------------------------------ */
/*            PRODUCT CARD              */
/* ------------------------------------ */ 
function ProductCard({ product }) {
  const { id, price, name, image } = product ? product : '';

  /* ********** RENDERING ************* */
  return (
    <motion.div 
      className="product-card"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
    >
      <Link to={`/products/${id}`} className="pos-r">
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
      </Link>
    </motion.div>
  );
}

export default ProductCard;