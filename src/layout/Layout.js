/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { Outlet } from "react-router-dom";

// UI_Local Components
import Header from "./header";
import MobileHeader from "./mobile-header";

// Utils
import { useBoolean } from "../Hooks";

/* ------------------------------------ */
/*                 Layout               */
/* ------------------------------------ */
function Layout() {
  const mobileHeader = useBoolean();

  /* ********** RENDERING ************* */
  return (
    <>
      <Header mobileHeader={mobileHeader} />
      {mobileHeader.value && <MobileHeader mobileHeader={mobileHeader} />}
      <Outlet />
    </>
  );
};

export default Layout;