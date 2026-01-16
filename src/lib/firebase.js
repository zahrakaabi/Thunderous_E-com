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
  apiKey: "AIzaSyDzy7X1hAE7EjMqq3OUjZjA9ofcPPL8Kbc",
  authDomain: "thunderous-805e4.firebaseapp.com",
  projectId: "thunderous-805e4",
  storageBucket: "thunderous-805e4.firebasestorage.app",
  messagingSenderId: "66888480409",
  appId: "1:66888480409:web:6b70d0857b80c93c11ea08",
  measurementId: "G-B8R9GGM5DS"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);