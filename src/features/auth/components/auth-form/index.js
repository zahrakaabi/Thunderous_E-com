/* ------------------------------------ */
/*              DEPENDENCIES            */
/* ------------------------------------ */
// Packages
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../../lib/firebase';

// Styles
import './index.scss';

/* ------------------------------------ */
/*             AUTHFORM PAGE            */
/* ------------------------------------ */ 
function AuthForm({ close }) {
  /* ************ HOOKS *************** */
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState("");

  /* *********** CONSTS ************** */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isLoginMode && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      if (isLoginMode) {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        console.log("Logged in!");
      } else {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        console.log("Account created!");
      }
    } catch (err) {
      setError(err.message);
    };
    close();
  };

  /* ********** RENDERING ************* */
  return (
    <div className="authForm-container" onClick={close}>
      <form className="authForm flex flex-column items-center"
      onClick={(e) => e.stopPropagation()} 
      onSubmit={handleSubmit}>
        <button className="authForm__close-btn" 
        type="button" 
        aria-label="close-form" 
        title="Close Form"
        onClick={close}>
          X
        </button>
        <h2>{isLoginMode ? 'Login' : 'Register'}</h2>
        <label className="authForm__form-group flex flex-column">
          E-mail
          <input 
            type="text" 
            name="email" 
            placeholder="user@example.com" 
            value={formData.email} 
            onChange={handleChange}
          />
        </label>
        <label className="authForm__form-group flex flex-column">
          Password
          <input 
            type="password" 
            name="password" 
            placeholder="Type your password" 
            value={formData.password} 
            onChange={handleChange}
          />
        </label>
        {!isLoginMode && (
          <label className="authForm__form-group flex flex-column">
            Confirm Password
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm your password"
              value={formData.confirmPassword} 
              onChange={handleChange}
            />
          </label>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="authForm__submit-btn flex items-center justify-center w-full" 
        aria-label={isLoginMode ? 'Login' : 'Register'}
        title={isLoginMode ? 'Login' : 'Register'}
        type="submit">
          {isLoginMode ? 'Login' : 'Register'}
        </button>
        <div className="authForm__toggle-group flex items-center">
          <span>
            {isLoginMode ? "Don't have an account?" : "Already have an account?"}
          </span>
          <button type="button"
          onClick={() => setIsLoginMode(prev => !prev)}>
            {isLoginMode ? "Register" : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;