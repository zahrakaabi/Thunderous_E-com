/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";

// Fetchers
import { fetchData } from '../../Hooks/useFetch';

// Styles
import './index.css';

/* ------------------------------------ */
/*            PRODUCT DETAILS           */
/* ------------------------------------ */ 
function ProductDetails() {
  const { id } = useParams();
  const { data: productDetails } = useQuery(['productDetails', id], () => fetchData(`Products/${id}`), { staleTime: 3000 });
  const { name, image, price } = productDetails ? productDetails : '';
  const API_URL = process.env.REACT_APP_API_URL;

  // translation
  const { t } = useTranslation('common');

  /* ********** RENDERING ************* */
  return (
    <div className="container product-detail-wrapper">
      <div className="product-detail__image">
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
          <img src={`${API_URL}/${image}`} alt={name} loading="lazy" />
        </Tilt>
      </div>
      <div className="product-detail__content flex justify-center items-center flex-column text-center">
        <h1>{name}</h1>
        <p>{t('product_detail.content')}</p>
        <h2>{price}</h2>
        <button type="button">{t('product_detail.button')}</button>
      </div>
    </div>
  );
}
export default ProductDetails;