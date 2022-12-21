/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages

// UI Local Components
import { PageHeader } from './Components';

// UI Local Pages
import { Home } from './Pages';

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
  /* ********** RENDERING ************* */
  return (
    <div className="App">
      <PageHeader />
      <Home />
    </div>
  );
}

export default App;
