/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useParams } from 'react-router-dom';
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";

// Utils
import { useCartModal, useProduct } from '../../../../hooks';
import { useCart } from '../../../cart/hooks';
import { FormatCurrency } from '../../../../helpers';

// Styles
import './index.scss';

/* ------------------------------------ */
/*            PRODUCT DETAILS           */
/* ------------------------------------ */ 
function ProductDetailsPage() {
  const { id: productId } = useParams();
  const { addProduct: addToCart} = useCart();
  const { addProduct } = useCartModal();
  const { data: productDetails, isLoading, isError } = useProduct(productId);
  
  const { t } = useTranslation('common');
  const API_URL = process.env.REACT_APP_HOST_API;

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

  /* ********** RENDERING ************* */
  return (
    <div className="product-detail container cursor-auto">
      <div className="product-detail__image">
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
          <img className="cover" src={`${API_URL}/${image}`} alt={name} loading="lazy" />
        </Tilt>
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