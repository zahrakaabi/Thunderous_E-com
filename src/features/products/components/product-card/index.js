/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { Link } from 'react-router-dom';

// Utils
import { useCart } from '../../../cart/hooks';
import { useCartModal } from '../../../../Hooks';
import { FormatCurrency } from '../../../../helpers';

// Styles
import './index.scss';
import { useState } from 'react';

/* ------------------------------------ */
/*            PRODUCT CARD              */
/* ------------------------------------ */ 
function ProductCard({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const { addProduct: addToCart } = useCart();
  const { addProduct } = useCartModal();
  const { id, price, name, image } = product;

  const handleAddToCart = (product) => {
    addProduct(product);
    addToCart(product);
  }; 

  /* ********** RENDERING ************* */
  return (
    <div className="product-card">
      <Link to={`/Shop/${id}`} className="pos-r">
        <div className="product-card__content flex justify-between">
          <h5>{name}</h5>
          <h5>{FormatCurrency(price)}</h5>
        </div>
        <div className="product-card__img">
          <img className="cover" 
            src={image} 
            alt={name}
            onLoad={() => setImageLoaded(true)}
            style={{
              filter: imageLoaded ? "blur(0px)" : "blur(10px)",
              transition: "filter 0.4s ease",
              transform: "translateZ(0)" // forces GPU layer
            }} 
          />
        </div>
      </Link>
      <button className="product-card__CTA-button flex justify-center items-center w-full cursor-pointer" 
      type="button"
      title="Add produt to your cart"
      aria-label="Add to your cart"
      onClick={() => handleAddToCart(product)}>+</button>
    </div>
  );
}

export default ProductCard;