/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { Outlet } from "react-router-dom";
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";

// UI_Local Components
import { PageHeader } from '../Components';

/* ------------------------------------ */
/*                 Layout               */
/* ------------------------------------ */
function Layout() {
  const queryClient = new QueryClient();

  /* ********** RENDERING ************* */
  return (
    <>
      <PageHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
};

export default Layout;