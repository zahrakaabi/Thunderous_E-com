/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { db } from "../lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
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
    await addDoc(collection(db, "products"), product);
  };
};

seedData();