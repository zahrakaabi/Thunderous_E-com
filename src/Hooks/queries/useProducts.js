/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useQuery } from "@tanstack/react-query";

// Utils
import { productsService } from "../../services";

/* -------------------------------------------------------------------------- */
/*                           usePrudcts CUSTOM HOOK                           */
/* -------------------------------------------------------------------------- */
export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: productsService.getAll
  })
};