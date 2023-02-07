/* ---------------------------------------- */
/*                DEPENDENCIES              */
/* ---------------------------------------- */
// Packages
import React, { useEffect } from 'react';
import AnimatedCursor from "react-animated-cursor";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

// UI Local Components
import { Banner, About, NewIn, ScrollProgressBar } from '../../Components';

/* ---------------------------------------- */
/*                  Home PAGE               */
/* ---------------------------------------- */
function Home() {
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
    }, [])

    // SIGN OUT
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

    /* ************ RENDERING ************* */
    return (
        <div>
            <AnimatedCursor
                innerSize={6}
                outerSize={25}
                color="0, 0, 0"
                outerAlpha={0.2}
                innerScale={1}
                outerScale={3}
                clickables={[
                    "a",
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    "label[for]",
                    "select",
                    "textarea",
                    "button",
                    ".link",
                ]}
            />
            <Banner />
            <About />
            <NewIn />
            <ScrollProgressBar />
            <div>
                <p>
                    Welcome Home
                </p>
 
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
            </div>
        </div>
    )
}
export default Home;