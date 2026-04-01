/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

// Utils
import { useCartModal, useProduct } from '../../../../Hooks';
import { useCart } from '../../../cart/hooks';
import { FormatCurrency } from '../../../../helpers';

// Styles
import './index.scss';

/* ------------------------------------ */
/*            PRODUCT DETAILS           */
/* ------------------------------------ */ 
function ProductDetailsPage() {
  /* ********** HOOKS ************* */
  const refImg = useRef(null);

  const { id: productId } = useParams();
  const { addProduct: addToCart} = useCart();
  const { addProduct } = useCartModal();
  const { data: productDetails, isLoading, isError } = useProduct(productId);
  //
  const { t } = useTranslation('common');

  // Handle data
  if (isLoading) {
    return <p>Loading</p>;
  };

  if (isError || !productDetails) {
    return <p>Error</p>;
  };
  
  const { name, image, price } = productDetails;

  const handleAddToCart = (productDetails) => {
    addToCart(productDetails);
    addProduct(productDetails);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = refImg.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    refImg.current.style.transform = `rotateY(${x * 20}deg) rotateX(${-y * 20}deg)`;
  };

  const handleMouseLeave = () => {
    refImg.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  /* ********** RENDERING ************* */
  return (
    <div className="product-detail container cursor-auto">
      <div className="product-detail__image">
        <div ref={refImg}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: "transform 0.1s ease", transformStyle: "preserve-3d" }}>
          <img className="cover" src={image} alt={name} loading="lazy" />
        </div>
      </div>
      <div className="product-detail__content flex justify-center items-center flex-column gap-2 text-center">
        <h1 className="product-detail__title">{name}</h1>
        <p className="product-detail__descrip">{t('product_detail.content')}</p>
        <h2 className="product-detail__price">{FormatCurrency(price)}</h2>
        <button className="product-detail__add-to-cart cursor-pointer"
        type="button"
        title="add-to-cart"
        aria-label="add-to-cart"
        onClick={() => handleAddToCart(productDetails)}>
          {t('product_detail.button')}
        </button>
      </div>
    </div>
  );
}
export default ProductDetailsPage;