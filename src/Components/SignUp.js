import React, { useState } from 'react'
import Facebook from '../assets/facebook.png';
import Google from '../assets/google.png';
import Close from '../assets/close.png';

function SignUp({ setSignUp, signUp }) {
    const [password, setPassword] = useState('');
    const [confirmPassword, confirmSetPassword] = useState('');
    const [alert, setAlert] = useState(false);
    return (
        <div className="signup__page flex__center" style={{ transform: `translateX(${(signUp) ? '0%' : '-100%'})`, transition: 'all 0.3s ease' }}>
            <div className="direct__sigin__buttons flex__spacebetween">
                <h3>Sign In with Facebook</h3>
                <img src={Facebook} alt=''></img>
            </div>
            <div className="direct__sigin__buttons flex__spacebetween">
                <h3>Sign In with Google</h3>
                <img src={Google} alt=''></img>
            </div>
            <p style={{ color: 'white' }}>-Or-</p>
            <input placeholder='Enter your First Name'></input>
            <input placeholder='Enter your Last Name'></input>
            <input placeholder='Enter your E-mail'></input>
            <input placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} type='password'></input>
            <input placeholder='Confirm your Password' value={confirmPassword} onChange={(e) => {
                confirmSetPassword(e.target.value);
            }} onBlur={() => {
                if (confirmPassword === password) {
                    setAlert(false);
                } else {
                    setAlert(true);
                }
                console.log(password, confirmPassword);
            }} type='password'></input>
            {
                (alert) ? (
                    <p className="pass__alert">password doesn't match</p>
                ) : ''
            }
            <button className="signin__button">Sign Up</button>
            <img src={Close} alt='' className='close__btn' onClick={() => setSignUp(false)}></img>
        </div>
    )
}

export default SignUp
