/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";

// Fetchers
import { fetchData } from '../../Hooks/useFetch';

// Styles
import './index.css';

/* ---------------------------------------- */
/*               BANNER COMPONENT           */
/* ---------------------------------------- */
function Banner() {
    const { data } = useQuery(['products'], () => fetchData('Products'), { staleTime: 3000 });
    
    /* ************ RENDERING ************* */
    return (
        <div className="container">
          <div className="Slider flex items-end w-screen">
             {data?.data?.map((product) => {
                  const { id, price, name, image } = product;
                  return (
                    <Link to={`/products/${id}`} className="pos-r" key={id}>
                      <div className="product-details">
                          <span>{price}</span>
                          <span>{name}</span>
                      </div>
                      <img src={image} alt={name} loading="lazy" width={250} height={300}  />
                    </Link>
                  )
                }
             )}
          </div>
          <div className="banner-content">
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero.</p>
          </div>
        </div>
    )
}
export default Banner;