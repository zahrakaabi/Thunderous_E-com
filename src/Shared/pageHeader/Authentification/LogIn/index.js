/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useState } from 'react';
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../../../firebase';
import { useNavigate } from 'react-router-dom';

// Context
import { useAuthValue } from '../../../../Context/AuthContextProvider';

// Styles
import './index.css';

/* ------------------------------------ */
/*                 SIGN UP              */
/* ------------------------------------ */
function Login({ toggle, setAuthMode }) {
    const navigate = useNavigate();
    
    // Context
    const { setTimeActive } = useAuthValue();

    // States
    const [email, setEmail] = useState(''); 
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
                .catch((err) => console.log(err.message));
            } else {
                navigate('/');
                toggle();
            }
        })
        .catch((err) => console.log(err));
    }

    /* ************ RENDERING ************/
    return(
        <main className="login">        
            <form onSubmit={onLogin}>                                              
                <div className="form-group">
                    <label className="flex flex-column" htmlFor="email-address">
                        Email address
                        <input
                            id="email-address"
                            name="email"
                            type="email"                                    
                            required                                                                                
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                            autocomplete="off"
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label className="flex flex-column" htmlFor="password">
                        Password
                        <input
                            id="password"
                            name="password"
                            type="password"                                    
                            required                                                                                
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                                                
                <button type="submit">Login</button>                              
            </form>
                       
            <p>No account yet?<span onClick={() => setAuthMode('register')}>Register</span></p>         
        </main>
    )
}
 
export default Login;