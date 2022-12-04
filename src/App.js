/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages

// UI Local Components
import { PageHeader } from './Components';

// Styles
import './Shared/styles/global.css';
import './Shared/styles/variables.css';
import './Shared/styles/typography.css';

/* ------------------------------------ */
/*                    APP               */
/* ------------------------------------ */
function App() {
  /* ********** RENDERING ************* */
  return (
    <div className="App">
        <PageHeader />
    </div>
  );
}

export default App;
