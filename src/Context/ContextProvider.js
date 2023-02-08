/* ------------------------------------------- */
/*                 DEPENDENCIES                */
/* ------------------------------------------- */
// Packages
import { createContext, useContext, useState } from 'react';

/* ------------------------------------------- */
/*              CONTEXT PROVIDERS              */
/* ------------------------------------------- */
// CREATE CONTEXT
const StateContext = createContext();

// CONTEXT PROVIDERS
export function ContextProvider({ children }) {
    // STATES
    const [activeMenu, setActiveMenu] = useState(false);
    const [dataStateMenu, setDataStateMenu] = useState('closing');

    /* ************** RENDERING ************* */
    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu, dataStateMenu, setDataStateMenu }}>
            {children}
        </StateContext.Provider>
    );
};

// CONTEXT HOOK
export const useStateContext = () => useContext(StateContext);