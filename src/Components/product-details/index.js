/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import Tilt from "react-parallax-tilt";

// Fetchers
import { fetchData } from '../../Hooks/useFetch';

// Styles
import './index.css';

/* ------------------------------------ */
/*            PRODUCT DETAILS           */
/* ------------------------------------ */ 
function ProductDetails() {
  const { id } = useParams();
  const { data } = useQuery(['productDetails'], () => fetchData(`Products/${id}`), { staleTime: 3000 });
  const { name, image, price } = data ? data?.data : '';
  const API_URL = process.env.REACT_APP_API_URL;

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
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
        <h2>{price}</h2>
        <button type="button">Add to cart</button>
      </div>
    </div>
  );
}
export default ProductDetails;