/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/* -------------------------------------------------------------------------- */
/*                               FIREBASE CONFIG                              */
/* -------------------------------------------------------------------------- */
const firebaseConfig = {
  apiKey: "AIzaSyDwtFmqmPiUhWvc0dSieXIusKaC-rNGHlM",
  authDomain: "thunderous-6fffc.firebaseapp.com",
  projectId: "thunderous-6fffc",
  storageBucket: "thunderous-6fffc.firebasestorage.app",
  messagingSenderId: "8415914784",
  appId: "1:8415914784:web:741930460c5508b8374545"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);