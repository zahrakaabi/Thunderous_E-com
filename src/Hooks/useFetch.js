/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import { useState, useEffect } from 'react';
import axios from 'axios';

/* ---------------------------------------- */
/*            USE FETCH CUSTOM HOOK         */
/* ---------------------------------------- */
function useFetch(url) {
  // STATES
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // EFFECTS
  useEffect(() => {
    setLoading(true);

    axios.get(url)
    .then(({ data }) => setData(data))
    .catch((error) => setError(error))
    .finally(() => setLoading(false))
  }, [url]);

  // @TO DO : try effect resturn + fix double rendering

  /* ************ RENDERING *************** */
  return { data, loading, error }
}

export default useFetch;