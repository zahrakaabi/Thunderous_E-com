/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
// import { endpoints, fetcher } from "../lib";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

/* -------------------------------------------------------------------------- */
/*                              PRODUCTS SERVICE                              */
/* -------------------------------------------------------------------------- */
export const productsService = {
  getAll: async () => {
    const snapshot = await getDocs(collection(db, "products"));
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
  },

  getById: async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) throw new Error("Product not found");
    return { id: docSnap.id, ...docSnap.data() };
  }
};

// export const productsService = {
//   getAll() {
//     return fetcher(endpoints.products.list)
//   },
//   getById(id) {
//     return fetcher(endpoints.products.details(id))
//   }
// };