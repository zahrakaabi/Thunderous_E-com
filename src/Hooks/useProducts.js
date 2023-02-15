/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import { useQuery } from "@tanstack/react-query";

// Fetchers
import { fetchData } from '../Hooks/useFetch';

/* ---------------------------------------- */
/*             CUSTOM MODAL HOOK            */
/* ---------------------------------------- */
function useProducts() {
  // GET PRODUCTS DATA
  const { data: products } = useQuery(['products'], () => fetchData('Products'), { staleTime: 3000 });

  /* ************* RENDERING ************* */
  return products;
};

export default useProducts;