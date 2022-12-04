/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages

// Styles
import './index.css';

/* ------------------------------------ */
/*         RESPONSIVE  HEADER           */
/* ------------------------------------ */
function ResponsivePageHeader() {
    /* ********** RENDERING *********** */
    return (
      <div className="responsive-menu text-center flex justify-center items-center h-full">
        <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/#">About</a></li>
            <li><a href="/#">Services</a></li>
            <li><a href="/#">Contact</a></li>
        </ul>
      </div>
    );
  }
  
  export default ResponsivePageHeader;