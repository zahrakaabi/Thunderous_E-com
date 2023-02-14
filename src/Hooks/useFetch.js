/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import axios from "axios";

/* ---------------------------------------- */
/*                 FETCH DATA               */
/* ---------------------------------------- */
export const fetchData = async (url) => {
    // API URL
    const API_URL = process.env.REACT_APP_API_URL;

    // GET DATA
    const { data } = await axios.get(`${API_URL}/${url}`);

    /* *********** RENDERING ************** */
    return data;
}    