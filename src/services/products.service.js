/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { endpoints, fetcher } from "../lib";

/* -------------------------------------------------------------------------- */
/*                              PRODUCTS SERVICE                              */
/* -------------------------------------------------------------------------- */
export const productsService = {
  getAll() {
    return fetcher(endpoints.products.list)
  },
  getById(id) {
    return fetcher(endpoints.products.details(id))
  }
};