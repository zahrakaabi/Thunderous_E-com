/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// UI Local Components
import { PageHeader } from './Components';

// Styles
import './Shared/styles/global.css';
import './Shared/styles/variables.css';
import './Shared/styles/typography.css';

// Lazy UI Local Pages
//import  Home  from './Pages/Home';
const Home = lazy(() => import('./Pages/Home'))

// @TO DO : Run the next line in the terminal
// npx json-server --watch data/db.json --port 3001 
/* ------------------------------------ */
/*                    APP               */
/* ------------------------------------ */ 
function App() {
  /* ********** RENDERING ************* */
  return (
    <div className="App">
    <Router>
      <Routes>
            <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
