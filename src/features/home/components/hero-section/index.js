/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

// Helpers
import { useProducts } from '../../../../Hooks';
import { FormatCurrency } from '../../../../helpers';

// Styles
import './index.scss';

/* ---------------------------------------- */
/*          HERO SECTION COMPONENT          */
/* ---------------------------------------- */
function HeroSection() {
  /* ************ CONSTANTS ************* */
  const { t } = useTranslation('common');
  const { data: products } = useProducts();
  
  /* ************ RENDERING ************* */
  return (
    <div className="container">
      <div className="Slider flex items-end w-screen">
        {products?.map((product) => {
          const { id, price, name, image } = product;
          return (
            <Link to={`/Shop/${id}`} className="product transition pos-r" key={id}>
              <div className="product__details w-full">
                <span>{FormatCurrency(price)}</span>
                <span>{name}</span>
              </div>
              <img className="product__img transition" src={image} alt={name} loading="lazy" width={250} height={300}  />
            </Link>
          )}
        )}
      </div>
      <div className="banner-content section-seperator">
        <p>{t('index.banner')}</p>
      </div>
    </div>
  )
};

export default HeroSection;