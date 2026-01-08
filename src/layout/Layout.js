/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { Outlet } from "react-router-dom";

// UI_Local Components
import Header from "./header";

/* ------------------------------------ */
/*                 Layout               */
/* ------------------------------------ */
function Layout() {
  /* ********** RENDERING ************* */
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;