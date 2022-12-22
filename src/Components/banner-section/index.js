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
             {data?.data?.map((product) => (
              <a href='/' className="pos-r" key={product.id}>
                <div className="product-details">
                    <span>{product.price}</span>
                    <span>{product.name}</span>
                </div>
                <img src={product.image} alt={product.name} />
              </a>
             ))}
          </div>
          <div className="banner-content">
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero.</p>
          </div>
        </div>
    )
}
export default Banner;

// @ TO DO : use loading="lazy" html attribute its eager by default
// @ TO DO : use instead reat-lazy-load-image-component (effect="blur")
// @ TO DO : use better react-blurhash   