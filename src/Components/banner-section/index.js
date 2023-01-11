/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
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
                    <a href={`/products/${id}`} className="pos-r" key={id}>
                      <div className="product-details">
                          <span>{price}</span>
                          <span>{name}</span>
                      </div>
                      <img src={image} alt={name} />
                    </a>
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