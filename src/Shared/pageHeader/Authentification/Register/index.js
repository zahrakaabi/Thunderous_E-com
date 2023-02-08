/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../../../firebase';
 
// Context
import { useAuthValue } from '../../../../Context/AuthContextProvider';

// Styles
import './index.css';

/* ------------------------------------ */
/*                 SIGN UP              */
/* ------------------------------------ */
function Register() {
    const navigate = useNavigate();

    // CONTEXT
    const { setTimeActive } = useAuthValue();
 
    // States
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
 
    // Password valid
    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== '') {
            if (password !== confirmPassword) {
                isValid = false;
                setError('Passwords does not match');
            }
        }
        return isValid;
    }

    // Register
    const register = async (e) => {
      e.preventDefault();

      setError('');

      if(validatePassword()) {
          await createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            sendEmailVerification(auth.currentUser)
            .then(() => {
                setTimeActive(true);
                navigate('verify-email');
            })
            .catch((err) => alert(err.message))
          })
          .catch((err) => setError(err.message))
      }

      setEmail('');
      setPassword('');
      setConfirmPassword('');


      /*await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });*/
    }

  /* ************ RENDERING ************/
  return (
    <main >        
        <section>
            <div>
                <div>                  
                    <h1> FocusApp </h1>                                                                            
                    <form onSubmit={register} name='registration_form'>                                                                                            
                        <div>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="password">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                label="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                required                                 
                                placeholder="Confirm Password"              
                            />
                        </div>                                             
                        
                        <button type="submit">Register</button>
                                                                     
                    </form>
                   
                    <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            login
                        </NavLink>
                    </p>                   
                </div>
            </div>
        </section>
    </main>
  )
}
 
export default Register;