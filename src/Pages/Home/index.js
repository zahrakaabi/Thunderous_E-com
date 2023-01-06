/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";

// UI Local Components
import { Banner, About, NewIn, ScrollProgressBar } from '../../Components';

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
                <NewIn />
            </QueryClientProvider>
            <ScrollProgressBar />
        </div>
    )
}
export default Home;