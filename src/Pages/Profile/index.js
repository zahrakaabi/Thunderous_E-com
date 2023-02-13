/* ------------------------------------ */
/*              DEPENDENCIES            */
/* ------------------------------------ */
// Packages
import { signOut } from 'firebase/auth';

import { auth } from '../../firebase';

// Context
import { useAuthValue } from '../../Context/AuthContextProvider';

// Styles
import './index.css';

/* ------------------------------------ */
/*              PROFILE PAGE            */
/* ------------------------------------ */ 
function Profile() {
  //CONTEXT
  const { currentUser } = useAuthValue();

  /* ********** RENDERING ************* */
  return (
    <div className="profile-container flex flex-column justify-center items-center">
        <h1 className="text-center">WELCOME TO PROFILE PAGE</h1>
        <p><strong>Email: </strong>{currentUser?.email}</p>
        <p><strong>Email verified </strong>{currentUser?.emailVerified}</p>
        <button type="button" onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  );
}

export default Profile;