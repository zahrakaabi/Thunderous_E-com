/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { Outlet } from "react-router-dom";

// UI Local Components
import { PageHeader } from '../Components';

/* ------------------------------------ */
/*                 Layout               */
/* ------------------------------------ */
function Layout() {
  /* ********** RENDERING ************* */
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
};

export default Layout;