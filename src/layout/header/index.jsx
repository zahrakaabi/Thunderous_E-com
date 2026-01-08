/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../../firebase';

// Context

// Custom Hook

// UI Local Components

// Images
// import SHOPPING_BAG from '../../Assets/Images/Icons/shopping-bag.png';

// Styles
import './index.scss';

/* ------------------------------------ */
/*                 HEADER               */
/* ------------------------------------ */
function Header() {    
  // translation
  const { t, i18n } = useTranslation('common');
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  // LOCATION
  const { pathname } = useLocation();

  /* ********** RENDERING *********** */
  return (
    <>
      <div className="container header flex justify-between items-center">
        <Link className="logo cursor-auto" to="/">{t('navbar.logo')}</Link>

        <nav className="menu">
          <button className="menu__burger-menu flex flex-column" 
          aria-controls="primary-navigation"
          aria-label="Menu">
            {/* Screen Reader Only*/}
            <span className="visually-hidden"></span>
            <div></div>
            <div></div>
            <div></div>
          </button>

          {/* <ResponsiveHeader /> */}

          <div className="menu__links">
            <ul className="flex gap-2 items-center">
              <li><Link to="/">{t('navbar.link_1')}</Link></li>
              <li><Link to="/about">{t('navbar.link_2')}</Link></li>
              <li><Link to="/Shop">{t('navbar.link_3')}</Link></li>
              <li><Link to="/contact">{t('navbar.link_4')}</Link></li>
              {/* <li>
                <div onClick={toggle}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5  5v1z"></path>
                  </svg>
                </div>
                {openModal ? (
                  <Modal openModal={openModal} toggle={toggle}>
                    {authMode === 'login' ? <Login toggle={toggle} setAuthMode={setAuthMode} /> : <></>}
                    {authMode === 'register' ? <Register toggle={toggle} setAuthMode={setAuthMode} verifyEmail={verifyEmail} setVerifyEmail={setVerifyEmail} /> : <></>}
                    {verifyEmail ? <VerifyEmail /> : <></>}
                  </Modal>
                ) : <></>}
              </li> */}
              {pathname === '/shop' && <>
                <li>
                  <div>
                  {/* <div onClick={() => setOpenSearch((prev) => !prev)}> */}
                    <svg  width="24" height="24" viewBox="0 0 24 24">
                      <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                    </svg>
                  </div>
                </li>
                {/* {openSearch ? <Search setOpenSearch={setOpenSearch} /> : <></>} */}
              </>}  
              {/* <li>
                <Link to="cart" className="pos-r">
                  <img className="shopping_bag" src={SHOPPING_BAG} alt="shopping_bag" />
                  {cartItemsNumber !== 0 ? <span className="cart_items_num flex justify-center items-center">{cartItemsNumber}</span> : <></>}
                </Link> 
                {openCart ? <ModalCart /> : <></>}            
              </li> */}
              <li className="flex items-center">
                <button className="language cursor-auto flex items-center justify-center" 
                onClick={() => changeLanguage('fr')}>
                  fr
                </button>
                <button className="language cursor-auto flex items-center justify-center" 
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

export default Header;