/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import React, {useState} from 'react';
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../../../firebase';
import { NavLink, useNavigate } from 'react-router-dom';

// CONTEXT
import { useAuthValue } from '../../../../Context/AuthContextProvider';

// Styles
import './index.css';

/* ------------------------------------ */
/*                 SIGN UP              */
/* ------------------------------------ */
function Login() {
    const navigate = useNavigate();
    
    // Context
    const { setTimeActive } = useAuthValue();

    // States
    const [email, setEmail] = useState('');
    const [error, setError] = useState(''); 
    const [password, setPassword] = useState('');

    // OnLogin
    const onLogin = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            if(!auth.currentUser.emailVerified) {
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    setTimeActive(true);
                    navigate('/verify-email');
                })
                .catch((err) => alert(err.message));
            } else {
                navigate('/');
            }
        })
        .catch(err => setError(err.message));
    }


    /*
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }*/

    /* ************ RENDERING ************/
    return(
        <main>        
            <section>
                <div>                                            
                    <p> FocusApp </p>                       
                                                    
                    <form>                                              
                        <div>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"                                    
                                required                                                                                
                                placeholder="Email address"
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"                                    
                                required                                                                                
                                placeholder="Password"
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                                                
                        <div>
                            <button                                    
                                onClick={onLogin}                                        
                            >      
                                Login                                                                  
                            </button>
                        </div>                               
                    </form>
                       
                    <p className="text-sm text-white text-center">
                        No account yet? {' '}
                        <NavLink to="/signup">
                            Sign up
                        </NavLink>
                    </p>
                                                
                </div>
            </section>
        </main>
    )
}
 
export default Login;