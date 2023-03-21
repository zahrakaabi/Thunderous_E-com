/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Styles
import './index.css';

/* ------------------------------------ */
/*              PAGINATION              */
/* ------------------------------------ */ 
function Pagination({ productsPerPage, totalProducts, paginate, previousPage, nextPage }) {
  // Pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  /* ********** RENDERING ************* */
  return (
    <div className="container pagination-container">
        <ul className="pagination flex">
          <li onClick={previousPage} className="page-number previous-page flex justify-center items-center">
              Prev
          </li>
          {pageNumbers.map((pageNumber) => (
              <li key={pageNumber} className="page-number flex justify-center items-center">
                <div onClick={() => paginate(pageNumber)}>
                  {pageNumber}
                </div>
              </li>
          ))}
          <li onClick={nextPage} className="page-number next-page flex justify-center items-center">
              Next
          </li>
        </ul>
    </div>
  );
}

export default Pagination;