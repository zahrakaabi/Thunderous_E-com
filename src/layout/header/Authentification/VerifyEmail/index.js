/* ------------------------------------ */
/*                DEPENDENCIES          */
/* ------------------------------------ */
// Packages
import { useState, useEffect } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../../../../firebase';

// Context
import { useAuthValue } from '../../../../../Context/AuthContextProvider';

// Styles
import './index.css';

/* ------------------------------------ */
/*               VerifyEmail            */
/* ------------------------------------ */
function VerifyEmail() {
    const navigate = useNavigate();

    // CONTEXT
    const { currentUser, timeActive, setTimeActive } = useAuthValue();

    // States
    const [setButtonDisabled] = useState(false);
    const [time, setTime] = useState(60);

    // Resend Email Verification
    const resendEmailVerification = () => {
        setButtonDisabled(true);
        sendEmailVerification(auth.currentUser)
        .then(() => {
            setButtonDisabled(false);
            setTimeActive(true);
        })
        .catch((err) => {
            alert(err.message);
            setButtonDisabled(false);
        });
    }

    // Decreasing the time
    useEffect(() => {
        let interval = null;
        if (timeActive && time !== 0 ) {
          interval = setInterval(() => setTime((time) => time - 1), 1000);
        } else if (time === 0) {
          setTimeActive(false);
          setTime(60);
          clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [setTimeActive, timeActive, time]);

    // Reload
    useEffect(() => {
        const interval = setInterval(() => {
          currentUser?.reload()
          .then(() => {
            if (currentUser?.emailVerified) {
              clearInterval(interval)
              navigate('/');
            }
          })
          .catch((err) => console.log(err.message))
        }, 1000)
      }, [navigate, currentUser])

    /* ********** RENDERING *********** */
    return (
        <div className="verify-email">
            <h1>Email sent to <span>{currentUser?.email}</span> check your email!</h1>
            <button onClick={resendEmailVerification} disabled={timeActive}>
                {/* the button will be disabled for a minute when a verification email is sent */}
                Resend Email {timeActive && `in ${time}`}
            </button>
        </div>
    );
}

export default VerifyEmail;