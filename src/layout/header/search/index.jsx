/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useSearchParams } from 'react-router-dom';

// Styles
import './index.scss';

/* ------------------------------------ */
/*                 HEADER               */
/* ------------------------------------ */
function Search({ close }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (event) => {
        const value = event.target.value;
        if (!value) {
            searchParams.delete("q");
        } else {
            searchParams.set("q", value);
        };
        setSearchParams(searchParams);
    };

    const closeSearch = () => {
        setSearchParams((prev) => {
            const next = new URLSearchParams(prev);
            next.delete("q");
            return next;
        }, { replace: true });
        close();
    };

    /* ********** RENDERING *********** */
    return (
        <div className="search w-full">
            <input className='search__input w-full' 
              type="text" 
              placeholder="Search products..." 
              defaultValue={searchParams.get("q") ?? ""}
              onChange={handleSearch}
            />
            <button className="search__close flex items-center justify-center cursor-pointer" 
            type="button"  
            title="Close search"
            aria-label="close search" 
            onClick={closeSearch}>
                <span>X</span>
            </button>
        </div>
    )
}

export default Search;