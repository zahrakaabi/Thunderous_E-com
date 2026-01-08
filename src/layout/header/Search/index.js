/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Context
import { useStateContext } from '../../../../Context/ContextProvider';

// Styles
import './index.css';

/* ------------------------------------ */
/*                 HEADER               */
/* ------------------------------------ */
function Search() {
    // Context
    const { setSearchInput } = useStateContext();

    /* ********** RENDERING *********** */
    return (
        <div className="container search-container">
            <input type="text" placeholder="Search product" onChange={(e) => setSearchInput(e.target.value)} />
        </div>
    )
}

export default Search;