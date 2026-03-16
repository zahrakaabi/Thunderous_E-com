/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useQuery, useQueryClient } from "@tanstack/react-query";

// Utils
import { productsService } from "../../services";

/* -------------------------------------------------------------------------- */
/*                           useProduct CUSTOM HOOK                           */
/* -------------------------------------------------------------------------- */
export function useProduct(productId) {
  const queryClient = useQueryClient();
  
  return useQuery({
    queryKey: ["products", productId],
    queryFn: () => productsService.getById(productId),
    initialData: () => {
      const cached = queryClient.getQueryData(["products"])
      const products = Array.isArray(cached) ? cached : cached?.data
      return products?.find((product) => product.id === productId)
    },
    enabled: !!productId
  })
};