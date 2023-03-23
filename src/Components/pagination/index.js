/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Styles
import './index.css';

/* ------------------------------------ */
/*              PAGINATION              */
/* ------------------------------------ */ 
function Pagination({ productsPerPage, totalProducts, paginate, previousPage, nextPage, activePage }) {
  // Pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  /* ********** RENDERING ************* */
  return (
    <div className="container pagination-container">
        <ul className="pagination flex">
          <li onClick={previousPage} className={`${activePage === 0 ? 'active-page' : ''}
            page-number previous-page flex justify-center items-center`}>
            Prev
          </li>
          {pageNumbers.map((pageNumber) => (
              <li key={pageNumber} className={`${activePage === pageNumber ? 'active-page' : ''} 
                page-number flex justify-center items-center`}>
                <div className='flex justify-center items-center' onClick={() => paginate(pageNumber)}>
                  {pageNumber}
                </div>
              </li>
          ))}
          <li onClick={nextPage} className={`${activePage === pageNumbers + 1 ? 'active-page' : ''}
            page-number next-page flex justify-center items-center`}>
            Next
          </li>
        </ul>
    </div>
  );
}

export default Pagination;