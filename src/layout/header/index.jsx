/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { signOut } from "firebase/auth";

// UI Local Components
import Search from './search';
import CartModal from '../../features/cart/components/cart-modal';
import AuthForm from "../../features/auth/components/auth-form";

// Utils
import { useAuth, useBoolean } from '../../Hooks';
import { useCart } from '../../features/cart/hooks';
import { auth } from "../../lib/firebase";

// Styles
import './index.scss';

/* ------------------------------------ */
/*                 HEADER               */
/* ------------------------------------ */
function Header({ mobileHeader }) {   
  const { pathname } = useLocation();
  const { cartCount } = useCart();
  const { currentUser } = useAuth();

  const isAuthFormOpen = useBoolean();
  const search = useBoolean();

  const { t, i18n } = useTranslation('common');
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to logout?")) {
      await signOut(auth);
    };
  };

  /* ********** RENDERING *********** */
  return (
    <>
      <div className="container header flex justify-between items-center">
        <Link className="logo cursor-auto" to="/">{t('navbar.logo')}</Link>

        <nav className="menu flex items-center gap-2">
          <div className="menu__links">
            <ul className="flex gap-2 items-center">
              <li><Link to="/">{t('navbar.link_1')}</Link></li>
              <li><Link to="/shop">{t('navbar.link_3')}</Link></li>

              {pathname === '/shop' && <li>
                  <button className="cursor-pointer"
                  type="button" 
                  title="search"
                  aria-label="search"
                  onClick={search.onToggle}>
                    <svg  width="24" height="24" viewBox="0 0 24 24">
                      <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                    </svg>
                  </button>
                  {search.value && <Search close={search.onFalse} />}
                </li>
              } 

              <li>
                {currentUser ? (
                  <div onClick={handleLogout} style={{ cursor: "pointer" }}>
                    <p className="auth-state">Logout</p>
                  </div>
                ) : (
                  <div onClick={isAuthFormOpen.onTrue} style={{ cursor: "pointer" }}>
                    <p className="auth-state">Login</p>
                  </div> 
                )}
                {isAuthFormOpen.value && <AuthForm close={isAuthFormOpen.onFalse} />}          
              </li> 

              <li>
                <Link to="cart" className="cart pos-r">
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

          <button className="menu__burger-menu flex flex-column" 
          aria-controls="primary-navigation"
          aria-label="Menu"
          onClick={mobileHeader.onTrue}>
            {/* Screen Reader Only*/}
            <span className="visually-hidden"></span>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </nav>
      </div>
    </>
  );
}

export default Header;