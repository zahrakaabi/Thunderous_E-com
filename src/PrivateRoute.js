/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { Route, Redirect } from 'react-router-dom';

// Context
import { useAuthValue } from './Context/AuthContextProvider';

/* ------------------------------------ */
/*                PROFILE               */
/* ------------------------------------ */ 
function PrivateRoute({component:Component, ...rest}) {
  //CONTEXT
  const { currentUser } = useAuthValue()

  /* ************ RENDERING *********** */
  return (
    <Route
      {...rest}
      render = {(props) => {
        return currentUser?.emailVerified ? <Component {...props} /> : <Redirect to='/login' />
    }}>
    </Route>
  )
}

export default PrivateRoute;