/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useTranslation } from "react-i18next";

// Styles
import './index.scss';

/* ------------------------------------ */
/*        ALL PRODUCT MENU              */
/* ------------------------------------ */ 
function ProductsFilters({ selectedFilter, setSelectedFilter }) {
  /* ************ HOOKS *************** */
  const { t } = useTranslation('common');

  /* ********** CONSTANTS ************* */
  const FILTERS = [
    {
      id: 0,
      value: 'all',
      content: t('products.menu.button_1')
    },
    {
      id: 1,
      value: 'serum',
      content: t('products.menu.button_2')
    },
    {
      id: 2,
      value: 'creme',
      content: t('products.menu.button_3')
    }
  ];

  /* ********** RENDERING ************* */
  return (
    <div className="products-filter flex gap-2 flex-wrap cursor-auto">
      {FILTERS.map((filter) => <button key={filter.id}
        className={`products-filter__filter cursor-pointer transition flex gap-1 justify-center items-center 
         ${selectedFilter === filter.value ? 'active' : ''}`} 
        type="button"
        value={filter.value}
        onClick={(e) => setSelectedFilter(e.target.value)}>
          {filter.content}
        </button>
      )}
    </div>
  );
}

export default ProductsFilters;