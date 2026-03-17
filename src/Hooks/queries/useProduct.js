/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useQuery } from "@tanstack/react-query";

// Utils
import { productsService } from "../../services";

/* -------------------------------------------------------------------------- */
/*                           useProduct CUSTOM HOOK                           */
/* -------------------------------------------------------------------------- */
export function useProduct(productId) {
  return useQuery({
    queryKey: ["products", productId],
    queryFn: () => productsService.getById(productId),
    enabled: !!productId
  })
};