/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useEffect } from 'react';

// UI Local Components
import { PageHeader } from './Components';

// Styles
import './Shared/styles/global.css';
import './Shared/styles/variables.css';
import './Shared/styles/typography.css';

/* ------------------------------------ */
/*                    APP               */
/* ------------------------------------ */
// @TO DO : Run the next line in the terminal
// npx json-server --watch data/db.json --port 3000  
function App() {
  useEffect(() => {
        fetch('http://localhost:3000/Products')
        .then((res) => res.json())
        .then((data) => console.log('data', data))
  }, [])

  /* ********** RENDERING ************* */
  return (
    <div className="App">
        <PageHeader />
    </div>
  );
}

export default App;
