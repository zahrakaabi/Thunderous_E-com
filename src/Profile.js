/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

// Context
import { useAuthValue } from './Context/AuthContextProvider';

/* ------------------------------------ */
/*                PROFILE               */
/* ------------------------------------ */ 
function Profile() {
  //CONTEXT
  const { currentUser } = useAuthValue()

  /* ************ RENDERING *********** */
  return (
    <div className='center'>
      <div className='profile'>
        <h1>Profile</h1>
        <p><strong>Email: </strong>{currentUser?.email}</p>
        <p>
          <strong>Email verified: </strong>
          {`${currentUser?.emailVerified}`}
        </p>
        <span onClick={() => signOut(auth)}>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile;