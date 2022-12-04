/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages

// UI Local Components
import ResponsivePageHeader from './ResponsivePageHeader';

// Styles
import './index.css';

/* ------------------------------------ */
/*                 HEADER               */
/* ------------------------------------ */
function PageHeader() {
    /* ********** RENDERING *********** */
    return (
      <div className="container Header flex justify-between items-center">
          <a className="logo" href="/"><h1>LOGO</h1></a>

          <nav>
            <button className="burger-menu flex flex-column">
              <div></div>
              <div></div>
              <div></div>
            </button>

            <ResponsivePageHeader />

            <div className="menu">
              <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">About</a></li>
                <li><a href="/#">Services</a></li>
                <li><a href="/#">Contact</a></li>
              </ul>
            </div>
          </nav>
      </div>
    );
  }
  
  export default PageHeader;