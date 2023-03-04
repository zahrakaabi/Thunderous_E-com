/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

// Fetchers
import useProducts from '../../Hooks/useProducts';

// Helpers
import FormatCurrency from '../../Shared/Helpers/formatCurrency';

// Styles
import './index.css';

/* ---------------------------------------- */
/*               BANNER COMPONENT           */
/* ---------------------------------------- */
function Banner() {
    // data
    const products = useProducts();

    // translation
    const { t } = useTranslation('common');
    
    /* ************ RENDERING ************* */
    return (
        <div className="container">
          <div className="Slider flex items-end w-screen">
             {products?.map((product) => {
                  const { id, price, name, image } = product;
                  return (
                    <Link to={`/Shop/${id}`} className="pos-r" key={id}>
                      <div className="product-details">
                          <span>{FormatCurrency(price)}</span>
                          <span>{name}</span>
                      </div>
                      <img src={image} alt={name} loading="lazy" width={250} height={300}  />
                    </Link>
                  )
                }
             )}
          </div>
          <div className="banner-content">
            <p>{t('index.banner')}</p>
          </div>
        </div>
    )
}
export default Banner;