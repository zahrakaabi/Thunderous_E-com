/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/* ------------------------------------ */
/*            FIREBASE CONFIG           */
/* ------------------------------------ */ 
const firebaseConfig = {
  apiKey: "AIzaSyACNWmzCX-neeJDorSmE7aDEE5utFgRBhg",
  authDomain: "apply-learn.firebaseapp.com",
  projectId: "apply-learn",
  storageBucket: "apply-learn.appspot.com",
  messagingSenderId: "166727593771",
  appId: "1:166727593771:web:b3d6dd2c12ca1d5b505f6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;