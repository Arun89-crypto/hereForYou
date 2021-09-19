import React from 'react'
import Facebook from '../assets/facebook.png';
import Google from '../assets/google.png';
import Close from '../assets/close.png';

function SignIn({ setSignIn, signIn }) {
    return (
        <div className="signin__page flex__center" style={{ transform: `translateX(${(signIn) ? '0%' : '-100%'})`, transition: 'all 0.3s ease' }}>
            <div className="direct__sigin__buttons flex__spacebetween">
                <h3>Sign In with Facebook</h3>
                <img src={Facebook} alt=''></img>
            </div>
            <div className="direct__sigin__buttons flex__spacebetween">
                <h3>Sign In with Google</h3>
                <img src={Google} alt=''></img>
            </div>
            <p style={{ color: 'white' }}>-Or-</p>
            <input placeholder='Enter your E-mail'></input>
            <input placeholder='Enter your Password'></input>
            <button className="signin__button">Sign In</button>
            <img src={Close} alt='' className='close__btn' onClick={() => setSignIn(false)}></img>
        </div>
    )
}

export default SignIn
