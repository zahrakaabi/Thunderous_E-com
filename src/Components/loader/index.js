/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages

// Styles
import './index.scss';

/* ------------------------------------ */
/*                 LOADER               */
/* ------------------------------------ */
function Loader() {
  return (
    <div className="loader-wrapper flex flex-column justify-center items-center">
      <div className="inner-shadow">
        <div className="loader flex justify-center items-center">
          <div className="loader__item"></div>
        </div>
      </div>
      <h1>Loading...</h1>
    </div>
  )
}

export default Loader;