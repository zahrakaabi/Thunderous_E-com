/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import axios from "axios";

/* ---------------------------------------- */
/*                 FETCH DATA               */
/* ---------------------------------------- */
export const fetchData = async (url) => {
    const API_URL = process.env.REACT_APP_API_URL;
    const response = await axios.get(`${API_URL}/${url}`);
    return response;
}    