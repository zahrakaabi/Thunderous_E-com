/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../../firebase';

// Context
import { useStateContext } from '../../Context/ContextProvider';
import { useAuthValue } from '../../Context/AuthContextProvider';
import { useCartValue } from '../../Context/CartContextProvider';

// Custom Hook
import useModal from '../../Hooks/useModal';

// UI Local Components
import ResponsivePageHeader from './ResponsivePageHeader';
import { Modal, Register, Login, VerifyEmail } from './Authentification';

// Images
import SHOPPING_BAG from '../../Assets/Images/Icons/shopping-bag.png';

// Styles
import './index.css';

/* ------------------------------------ */
/*                 HEADER               */
/* ------------------------------------ */
function PageHeader() {
    // CONTEXT
    const { activeMenu, setActiveMenu, setDataStateMenu } = useStateContext();
    const { setCurrentUser } = useAuthValue();
    const { cartItemsNumber } = useCartValue();

    // STATES
    const [authMode, setAuthMode] = useState('login');
    const [verifyEmail, setVerifyEmail] = useState(false);

    useEffect(() => {
      // CLOSE MENU TOGGLE
      const MENU_TOGGLE = document.querySelector('.burger-menu');
      const handleDataStateMenu = () => MENU_TOGGLE.setAttribute('data-state', 'closed');
      MENU_TOGGLE.addEventListener('animationend', handleDataStateMenu(), { once: true });
      
      // Authentication
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });

      return MENU_TOGGLE.removeEventListener('animationend', handleDataStateMenu())
    }, [setCurrentUser]);

    // CUSTOM HOOK
    const { openModal, toggle } = useModal();
    
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
                  <li><Link to="products">{t('navbar.link_3')}</Link></li>
                  <li><Link to="contact">{t('navbar.link_4')}</Link></li>
                  <li>
                    <div onClick={toggle}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5  5v1z"></path>
                      </svg>
                    </div>
                    {openModal && (
                      <Modal openModal={openModal} toggle={toggle}>
                        {authMode === 'login' ? <Login toggle={toggle} setAuthMode={setAuthMode} /> : <></>}
                        {authMode === 'register' ? <Register toggle={toggle} setAuthMode={setAuthMode} verifyEmail={verifyEmail} setVerifyEmail={setVerifyEmail} /> : <></>}
                        {verifyEmail ? <VerifyEmail /> : <></>}
                      </Modal>
                    )}
                  </li>
                  <li>
                    <div className="pos-r">
                      <img className="shopping_bag" src={SHOPPING_BAG} alt="shopping_bag" />
                      {cartItemsNumber && cartItemsNumber !== 0 ? <span className="cart_items_num flex justify-center items-center">{cartItemsNumber}</span> : <></>}
                    </div>                  
                  </li>
                  <li className="flex">
                    <button className="cursor-auto flex items-center justify-center" 
                            onClick={() => changeLanguage('fr')}
                    >
                      fr
                    </button>
                    <button className="cursor-auto flex items-center justify-center" 
                            onClick={() => changeLanguage('en')}
                    >
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