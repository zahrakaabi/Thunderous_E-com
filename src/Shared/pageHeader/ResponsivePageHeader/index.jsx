/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useState } from 'react';

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
              <li><a href="/#" onClick={() => setActiveMenu(false)}>Home</a></li>
              <li><a href="/#" onClick={() => setActiveMenu(false)}>About</a></li>
              <li><a href="/#" onClick={() => setActiveMenu(false)}>Services</a></li>
              <li><a href="/#" onClick={() => setActiveMenu(false)}>Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default ResponsivePageHeader;