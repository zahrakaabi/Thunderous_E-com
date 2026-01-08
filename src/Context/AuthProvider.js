/* ------------------------------------------- */
/*                 DEPENDENCIES                */
/* ------------------------------------------- */
// Packages
import { createContext, useContext, useState } from 'react';

/* ------------------------------------------- */
/*              CONTEXT PROVIDERS              */
/* ------------------------------------------- */
// CREATE CONTEXT
const AuthContext = createContext();

// CONTEXT PROVIDERS
export function AuthProvider({ children }) {
  // STATES
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  /* ************** RENDERING ************* */
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, timeActive, setTimeActive }}>
      {children}
    </AuthContext.Provider>
  );
}

// CONTEXT HOOK
export const useAuthValue = () => useContext(AuthContext);