/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

// Context
import { useCartValue } from '../../Context/CartContextProvider';

// Styles
import './index.css';

/* ------------------------------------ */
/*            PRODUCT CARD              */
/* ------------------------------------ */ 
function ProductCard({ product }) {
  //Context
  const { addToCart } = useCartValue();

  // Desctruction
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
      <Link to={`/Shop/${id}`} className="pos-r">
        <div className="product-card__content flex justify-between">
          <h5>{name}</h5>
          <h5>{`$${price}`}</h5>
        </div>
        <div className="product-card__img">
          <img src={image} alt={name} />
        </div>
      </Link>
      <button className="product-card__CTA-button flex justify-center items-center" 
        type="button"
        title="Add produt to your cart"
        onClick={() => addToCart(product)}
      >+</button>
    </motion.div>
  );
}

export default ProductCard;