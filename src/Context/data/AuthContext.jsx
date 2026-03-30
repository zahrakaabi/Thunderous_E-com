/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

// Utils
import { auth } from "../../lib/firebase";

/* -------------------------------------------------------------------------- */
/*                             CREATE AUTH CONTEXT                            */
/* -------------------------------------------------------------------------- */
export const AuthContext = createContext();

/* -------------------------------------------------------------------------- */
/*                               AUTH PROVIDER                                */
/* -------------------------------------------------------------------------- */
function AuthProvider({ children }) {
/* ---------------------------------- Hooks --------------------------------- */
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;