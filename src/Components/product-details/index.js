/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useQuery } from "@tanstack/react-query";

// Fetchers
import { fetchData } from '../../Hooks/useFetch';

// Styles
import './index.css';

/* ------------------------------------ */
/*            PRODUCT DETAILS           */
/* ------------------------------------ */ 
function ProductDetails() {
  const { data } = useQuery(['productDetails'], () => fetchData('Products/1'), { staleTime: 3000 });

  console.log('data product details', data)
  /* ********** RENDERING ************* */
  return (
    <h1>kkkkk</h1>
  );
}
export default ProductDetails;