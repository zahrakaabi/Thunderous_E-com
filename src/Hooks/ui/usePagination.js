/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useMemo } from "react";

/* -------------------------------------------------------------------------- */
/*                           usePagination COMPONENT                          */
/* -------------------------------------------------------------------------- */
export function usePagination({ totalItems, itemsPerPage, currentPage }) {
/* --------------------------------- CONSTS --------------------------------- */
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pages = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
    // using _ is a convention that means This variable exists but is intentionally unused
  }, [totalPages]);

/* -------------------------------- RENDRING -------------------------------- */
  return {
    totalPages,
    pages,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1,
  };
};