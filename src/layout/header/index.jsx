/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../../firebase';


// UI Local Components
import CartModal from '../../features/cart/components/cart-modal';

// Utils
// import { useBoolean } from '../../hooks';
import { useCart } from '../../features/cart/hooks';

// Styles
import './index.scss';

/* ------------------------------------ */
/*                 HEADER               */
/* ------------------------------------ */
function Header() {   
  const { pathname } = useLocation();
  const { cartCount } = useCart();

  const { t, i18n } = useTranslation('common');
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
              <li><Link to="/shop">{t('navbar.link_3')}</Link></li>

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

              <li>
                <Link to="cart" className="pos-r">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-.16-.05-.31-.11-.44s-1.72-3.45-1.72-3.45A2 2 0 0 0 17.38 2H6.62c-.76 0-1.45.42-1.79 1.11L3.11 6.56c-.07.14-.11.29-.11.45v13Zm2 0V8h14v12zM17.38 4l1 2H5.62l1-2z"></path>
                    <path d="M12 13c-1.65 0-3-1.35-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.65-1.35 3-3 3"></path>
                  </svg>
                  {cartCount !== 0 && <span className="cart__count flex justify-center items-center">
                    {cartCount}
                  </span>}
                </Link> 
                <CartModal />          
              </li>

              <li className="flex items-center">
                <button className="language cursor-pointer flex items-center justify-center"
                title="Traduire en franais"
                aria-label="Traduire en franais" 
                onClick={() => changeLanguage('fr')}>
                  fr
                </button>
                <button className="language cursor-pointer flex items-center justify-center"
                title="Translate to english"
                aria-label="Translate to english"
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