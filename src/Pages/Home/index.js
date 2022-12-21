/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";

// UI Local Components
import { Banner } from '../../Components';

/* ---------------------------------------- */
/*                  Home PAGE               */
/* ---------------------------------------- */
function Home() {
    const queryClient = new QueryClient();
    /* ************ RENDERING ************* */
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Banner />
            </QueryClientProvider>
        </div>
    )
}
export default Home;