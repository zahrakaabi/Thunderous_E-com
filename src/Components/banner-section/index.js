/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import { useQuery } from "@tanstack/react-query";

// Fetchers
import { fetchData } from '../../Hooks/useFetch';

/* ---------------------------------------- */
/*               BANNER COMPONENT           */
/* ---------------------------------------- */
function Banner() {
    const { data } = useQuery(['products'], () => fetchData('products'), { staleTime: 3000 });
    /* ************ RENDERING ************* */
    return (
        <div>
            {data?.data?.map((el) => <div key={el.id}>{el.name}</div>)}
        </div>
    )
}
export default Banner;

// @ TO DO : use loading="lazy" html attribute its eager by default
// @ TO DO : use instead reat-lazy-load-image-component (effect="blur")
// @ TO DO : use better react-blurhash   