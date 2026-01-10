/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Styles
import './index.scss';

/* ------------------------------------ */
/*         RESPONSIVE  HEADER           */
/* ------------------------------------ */
function MobileHeader({ mobileHeader }) {
  const { t } = useTranslation('common');

  const links = [
    {
      id: 1,
      href: '',
      content: t('navbar.link_1')
    },
    {
      id: 2,
      href: '/shop',
      content: t('navbar.link_3')
    }
  ];

  /* ********** RENDERING *********** */
  return (
    <div className={`mobile-header flex justify-end h-full w-full
    ${mobileHeader.value ? 'isOpen' : ''}`}
    onClick={mobileHeader.onFalse}>
      <div className="menu text-center flex justify-center items-center h-full w-full">
        <button className="menu__close" 
        type="button"
        title="close menu modal"
        aria-label="close menu modal"
        onClick={mobileHeader.onFalse}>
          X
        </button>
        <ul className="menu__links">
          {links.map((link) => <li key={link.id} className="mobile-link" >
              <Link to={link.href} onClick={mobileHeader.onFalse}>
                {link.content}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileHeader;