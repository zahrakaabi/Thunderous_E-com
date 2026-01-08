/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Utils
import { usePagination } from '../../hooks';

// Styles
import './index.scss';

/* ------------------------------------ */
/*              PAGINATION              */
/* ------------------------------------ */
function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
/* --------------------------------- CONSTS --------------------------------- */
  const { pages, hasNext, hasPrev } = usePagination({
    totalItems,
    itemsPerPage,
    currentPage
  });

  if (pages.length <= 1) return null;

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="pagination container flex justify-center items-center gap-1">
      <button className="pagination__prev cursor-pointer" 
      disabled={!hasPrev} 
      onClick={() => onPageChange(currentPage - 1)}>
        Prev
      </button>

      {pages.map((page) => (
        <button key={page}
        className={`pagination__pages cursor-pointer ${page === currentPage ? "active" : ""}`}
        onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}

      <button className="pagination__next cursor-pointer" 
      disabled={!hasNext} 
      onClick={() => onPageChange(currentPage + 1)}>
        Next
      </button>
    </div>
  );
}

export default Pagination;