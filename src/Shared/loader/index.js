/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages

// Styles
import './index.css';

/* ------------------------------------ */
/*                 LOADER               */
/* ------------------------------------ */
function Loader() {
  return (
    <div className="loader-wrapper flex flex-column justify-center items-center">
        <div className="loader-content">
            <div className="loader-container flex justify-center items-center">
                <div className="loader"></div>
            </div>
        </div>
        <h1>Loading...</h1>
    </div>
  )
}

export default Loader;