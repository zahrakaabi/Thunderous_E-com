/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../../../firebase';
 
// Context
import { useAuthValue } from '../../../../Context/AuthContextProvider';

// Styles
import './index.css';

/* ------------------------------------ */
/*                 SIGN UP              */
/* ------------------------------------ */
function Register({ setAuthMode, verifyEmail, setVerifyEmail }) {
    // CONTEXT
    const { setTimeActive } = useAuthValue();
 
    // States
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [meter, setMeter] = useState(false);
 
    // Password strength validation
    const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
    const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
    const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
    const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
    const eightCharsOrMore= /.{8,}/g; // eight characters or more

    const passwordTracker = {
        uppercase: password.match(atLeastOneUppercase),
        lowercase: password.match(atLeastOneLowercase),
        number: password.match(atLeastOneNumeric),
        specialChar: password.match(atLeastOneSpecialChar),
        eightCharsOrGreater: password.match(eightCharsOrMore),
    }

    const passwordStrength = Object.values(passwordTracker).filter(value => value).length;

    // Confirm Password
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
            .then(() => setTimeActive(true))
            .catch((err) => alert(err.message))
          })
          .catch((err) => console.log('error', err))

          setVerifyEmail(!verifyEmail);
      }
    }

  /* ************ RENDERING ************/
  return (
    <main className={`login ${verifyEmail ? 'hide-element' : ''}`}>                                                                              
        <form onSubmit={register} name='registration_form'>                                                                                            
            <div className="form-group">
                <label className="flex flex-column" htmlFor="email-address">
                    Email address
                    <input
                        type="email"
                        label="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  
                        required                                    
                        placeholder="Email address"  
                        autoComplete="off"                              
                    />
                </label>
            </div>

            <div className="form-group">
                <label className="flex flex-column" htmlFor="password">
                    Password
                    <input
                        type="password"
                        label="Create password"
                        value={password}
                        onFocus={() => setMeter(true)}
                        onChange={(e) => setPassword(e.target.value)} 
                        required                                 
                        placeholder="Password"              
                    />
                </label>
                {meter ? (
                    <div className="password-strength-msg">
                        {passwordStrength < 5 ? 'Must contain ' : ''}
                        {!passwordTracker.uppercase ? 'uppercase, ' : ''}
                        {!passwordTracker.lowercase ? 'lowercase, ' : ''}
                        {!passwordTracker.specialChar ? 'special character, ' : ''}
                        {!passwordTracker.number ? 'number, ' : ''}
                        {!passwordTracker.eightCharsOrGreater ? 'and at least 8 characters.' : ''}
                    </div>
                ) : <></>}
            </div>
                        
            <div className="form-group">
                <label className="flex flex-column" htmlFor="password">
                    Confirm Password
                    <input
                        type="password"
                        label="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required                                 
                        placeholder="Confirm Password"              
                    />
                </label>
                {error ? <p className='error-msg'>{error}</p> : <></>}
            </div>                                             
            
            <button type="submit">Register</button>

        </form>
                
        <p>Already have an account?<span onClick={() => setAuthMode('login')}>login</span></p>
    </main>
  )
}
 
export default Register;