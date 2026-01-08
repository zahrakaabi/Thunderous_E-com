/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useTranslation } from "react-i18next";

// Context
import { useStateContext } from '../../../Context/ContextProvider';

// Styles
import './index.css';

/* ------------------------------------ */
/*         RESPONSIVE  HEADER           */
/* ------------------------------------ */
function ResponsivePageHeader() {
    // CONTEXT
    const { setActiveMenu, dataStateMenu, setDataStateMenu } = useStateContext();

    // translation
    const { t } = useTranslation('common');

    /* ********** RENDERING *********** */
    return (
      <div 
        id="primary-navigation" 
        className={`responsive-menu-container flex justify-end w-screen h-full`} 
        data-state={dataStateMenu}
        onClick={() => {
          setDataStateMenu('closing');
          setActiveMenu(false);
        }}
      >
        <div className="responsive-menu text-center flex justify-center items-center h-full">
          <ul>
              <li><a href="/" onClick={() => setActiveMenu(false)}>{t('navbar.link_1')}</a></li>
              <li><a href="/about" onClick={() => setActiveMenu(false)}>{t('navbar.link_2')}</a></li>
              <li><a href="/products" onClick={() => setActiveMenu(false)}>{t('navbar.link_3')}</a></li>
              <li><a href="/contacts" onClick={() => setActiveMenu(false)}>{t('navbar.link_4')}</a></li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default ResponsivePageHeader;