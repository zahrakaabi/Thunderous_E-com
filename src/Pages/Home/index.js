/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";

// UI Local Components
import { Banner, About } from '../../Components';

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
                <About />
            </QueryClientProvider>
        </div>
    )
}
export default Home;