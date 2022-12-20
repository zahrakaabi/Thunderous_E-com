/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// UI Local Components
import { PageHeader, Banner } from './Components';

// Styles
import './Shared/styles/global.css';
import './Shared/styles/variables.css';
import './Shared/styles/typography.css';

// @TO DO : Run the next line in the terminal
// npx json-server --watch data/db.json --port 3001 
/* ------------------------------------ */
/*                    APP               */
/* ------------------------------------ */ 
function App() {
  const queryClient = new QueryClient();
  /* ********** RENDERING ************* */
  return (
    <div className="App">
      <PageHeader />
      <QueryClientProvider client={queryClient}>
        <Banner />
      </QueryClientProvider>
    </div>
  );
}

export default App;
