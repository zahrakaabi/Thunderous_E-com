/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Context
import { useStateContext } from '../../Context/ContextProvider';

// UI Local Components
import ResponsivePageHeader from './ResponsivePageHeader';

// Styles
import './index.css';

/* ------------------------------------ */
/*                 HEADER               */
/* ------------------------------------ */
function PageHeader() {
    // CONTEXT
    const { activeMenu, setActiveMenu, setDataStateMenu } = useStateContext();

    // CLOSE MENU TOGGLE
    useEffect(() => {
      const MENU_TOGGLE = document.querySelector('.burger-menu');
      const handleDataStateMenu = () => MENU_TOGGLE.setAttribute('data-state', 'closed');
      MENU_TOGGLE.addEventListener('animationend', handleDataStateMenu(), { once: true })
      return MENU_TOGGLE.removeEventListener('animationend', handleDataStateMenu())
    }, [])
    
    // translation
    const { t, i18n } = useTranslation('common');
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    /* ********** RENDERING *********** */
    return (
      <>
        <div className="container Header flex justify-between items-center">
            <Link className="logo cursor-auto" to="/"><h1>{t('navbar.logo')}</h1></Link>

            <nav>
              <button 
                className="burger-menu flex flex-column" 
                aria-controls="primary-navigation"
                aria-label="Menu"
                aria-expanded={activeMenu}
                onClick={() => {
                  setDataStateMenu('opened');
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu);
                }}
              >
                {/* Screen Reader Only*/}
                <span className="visually-hidden"></span>
                <div></div>
                <div></div>
                <div></div>
              </button>

              <ResponsivePageHeader />

              <div className="menu">
                <ul>
                  <li><Link to="/">{t('navbar.link_1')}</Link></li>
                  <li><Link to="about">{t('navbar.link_2')}</Link></li>
                  <li><Link to="shop">{t('navbar.link_3')}</Link></li>
                  <li><Link to="contact">{t('navbar.link_4')}</Link></li>
                  <li className="flex">
                    <button className="cursor-auto flex items-center justify-center" 
                            onClick={() => changeLanguage('fr')}>
                            fr
                        </button>
                    <button className="cursor-auto flex items-center justify-center" 
                            onClick={() => changeLanguage('en')}>
                            en
                        </button>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
      </>
    );
  }
  
  export default PageHeader;