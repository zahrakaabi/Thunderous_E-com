/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

// Hooks
import useProducts from '../../Hooks/useProducts';

// Styles
import './index.css';

/* ------------------------------------ */
/*        ALL PRODUCT MENU              */
/* ------------------------------------ */ 
function AllProductsMenu({ active, setActive, setFiltredProducts }) {
  // translation
  const { t } = useTranslation('common');

  // Hooks 
  const products = useProducts();

  useEffect(() => {
    if (active === 'All') {
      setFiltredProducts(products);
      return;
    }
    const filtredProducts = products?.filter((product) => product?.type?.includes(active));
    setFiltredProducts(filtredProducts);
  }, [active, setFiltredProducts, products]);

  /* ********** RENDERING ************* */
  return (
    <div className="all-products-menu flex flex-wrap">
        <button 
          className={`flex justify-center items-center ${active === 'All' ? 'active' : ''}`} 
          type="button"
          value="All"
          onClick={(e) => setActive(e.target.value)}
        >
          {t('products.menu.button_1')}
        </button>
        <button 
          className={`flex justify-center items-center ${active === 'Serum' ? 'active' : ''}`} 
          type="button"
          value="Serum"
          onClick={(e) => setActive(e.target.value)}
        >
          {t('products.menu.button_2')}
        </button>
        <button 
          className={`flex justify-center items-center ${active === 'Creme' ? 'active' : ''}`}  
          type="button"
          value="Creme"
          onClick={(e) => setActive(e.target.value)}
        >
          {t('products.menu.button_3')}
        </button>
    </div>
  );
}

export default AllProductsMenu;