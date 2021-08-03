import React from 'react'
import Facebook from '../assets/facebook.png';
import Google from '../assets/google.png';
import Close from '../assets/close.png';

function SignUp({ setSignUp }) {
    return (
        <div className="signup__page flex__center">
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
            <input placeholder='Enter your Password'></input>
            <input placeholder='Confirm your Password'></input>
            <button className="signin__button">Sign Up</button>
            <img src={Close} alt='' className='close__btn' onClick={() => setSignUp(false)}></img>
        </div>
    )
}

export default SignUp
