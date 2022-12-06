/* eslint-disable no-lone-blocks */
/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import axios from 'axios';

/* ---------------------------------------- */
/*           FETCH LANDING PAGE IMGS        */
/* ---------------------------------------- */
const fetchLandingProducts = async () => {
    console.log('fetching products');
    const response = await axios.get("link");
    const products = response.data;
    console.log('products', products);
    return products;
}

export default fetchLandingProducts;

// @ TO DO : Install axios
// @ TO DO : Use react query
// @ TO DO : Delete console logs
// why ? because actually useEffect is do not fetch data 
// till it is all uploaded wich not the case in real life
{/*import { useQuery } from '@tanstack/react-query';

export function withReactQuery() {
    const { isError, isSuccess, isLoading, data, error } = useQuery(
        ['landingProducts'],
        fetchLandingProducts,
        { staleTime: 60000 }
    );
    
    {/*if (isLoading) {
        console.log('is loading');
        return <div>isLoading....</div>
    };
    
    if (isError) {
        console.log('there is an error', error);
        return <div>Error....</div>
    };
}*/}



// @ TO DO : Use this useEffect fetch data
// this is what we called clean up function
/*
function fetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        //let subscribed = true;
        fetch('link', {signal})
        .then((res) => res.json())
        .then((data) => {
            if (subscribed) {
              setData(data)
            }
        })
        .catch((error) => {
            if (error.name === "AbortError") {
                console.log('cancelled!')
            } else {
                //@TO DO : Handle error
            }
        })

        return () => {
           //subscribed = false;
           controller.abort();
        }
    }, [])
    return
}
*/


/*
function fetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        axios.get('link', {cancelToken: cancelToken.token})
        .then((res) => {
            setData(res.data)
        })
        .catch((error) => {
            if (axios.isCancel(error)) {
                console.log('cancelled!')
            } else {
                //@TO DO : Handle error
            }
        })

        return () => {
            cancelToken.cancel();
        }
    }, [])
    return
}
*/