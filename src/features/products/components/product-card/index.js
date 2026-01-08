/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

// Utils
import { useCart } from '../../../cart/hooks';
import { FormatCurrency } from '../../../../shared/helpers';

// Styles
import './index.scss';

/* ------------------------------------ */
/*            PRODUCT CARD              */
/* ------------------------------------ */ 
function ProductCard({ product }) {
  const { addProduct } = useCart();
  const { id, price, name, image } = product; 

  /* ********** RENDERING ************* */
  return (
    <motion.div className="product-card"
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    layout>
      <Link to={`/Shop/${id}`} className="pos-r">
        <div className="product-card__content flex justify-between">
          <h5>{name}</h5>
          <h5>{FormatCurrency(price)}</h5>
        </div>
        <div className="product-card__img">
          <img className="cover" src={image} alt={name} />
        </div>
      </Link>
      <button className="product-card__CTA-button flex justify-center items-center w-full cursor-pointer" 
      type="button"
      title="Add produt to your cart"
      onClick={() => addProduct(product)}>+</button>
    </motion.div>
  );
}

export default ProductCard;