/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages

// Hooks
import useFetch from './Hooks/useFetch';

// UI Local Components
import { PageHeader } from './Components';

// Styles
import './Shared/styles/global.css';
import './Shared/styles/variables.css';
import './Shared/styles/typography.css';

// @TO DO : Run the next line in the terminal
// npx json-server --watch data/db.json --port 3000 
/* ------------------------------------ */
/*                    APP               */
/* ------------------------------------ */ 
function App() {
  // CONSTS
  const PRODUCTS_LINK = 'http://localhost:4000/Products';

  // STATES
  const { data, loading, error } = useFetch(PRODUCTS_LINK);
  // name data const {data: Joke} = useFettch('etc')

  // NESTED FUNCS
  if (loading) return <h1>loading....</h1>
  if (error) console.log('error', error)
  console.log('data', data)

  /* ********** RENDERING ************* */
  return (
    <div className="App">
        <PageHeader />
    </div>
  );
}

export default App;
