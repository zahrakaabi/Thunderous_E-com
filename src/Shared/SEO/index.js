/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// Packages
import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";

/* -------------------------------------------------------- */
/*                          SEO                             */
/* -------------------------------------------------------- */
function SEO({title, description, type}) {
  /* *********************** RENDERING ******************** */
  return (
    <Helmet>
        { /* Standard metadata tags */ }
        <title>{title}</title>
        <meta name='description' content={description} />
        { /* End standard metadata tags */ }
        
        { /* Facebook tags */ }
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        { /* End Facebook tags */ }
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default SEO;