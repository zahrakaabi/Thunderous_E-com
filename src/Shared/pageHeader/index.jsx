/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useEffect } from 'react';
import { Link } from "react-router-dom";

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

    /* ********** RENDERING *********** */
    return (
      <>
        <div className="container Header flex justify-between items-center">
            <a className="logo" href="/"><h1>LOGO</h1></a>

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
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="about">About</Link></li>
                  <li><Link to="shop">Shop</Link></li>
                  <li><Link to="contact">Contact</Link></li>
                </ul>
              </div>
            </nav>
        </div>
      </>
    );
  }
  
  export default PageHeader;