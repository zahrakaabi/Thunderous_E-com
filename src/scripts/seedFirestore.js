/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { db } from "../lib/firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import data from "../data/db.json";

/* -------------------------------------------------------------------------- */
/*                                  SEED DATA                                 */
/* -------------------------------------------------------------------------- */
const seedData = async () => {
  const existing = await getDocs(collection(db, "products"));
  if (!existing.empty) {
    return;
  };

  for (const product of data.Products) {
    await setDoc(doc(db, "products", String(product.id)), product);
  };
};

seedData();