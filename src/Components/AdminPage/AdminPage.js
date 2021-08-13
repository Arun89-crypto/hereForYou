import React, { useState } from 'react';
import User from './UserComponent/User'
import './AdminPage.css'
import GoToTop from '../GoToTop'

//smaple data fetched
const UserData = {
    name: "Name LastName",
    age: "defined",
    phone: "xxxxx-xxxxx",
    lang_pref: 'Hindi, English, Punjabi',
    gen_pref: 'Male',
    history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet sem id leo elementum bibendum. Praesent magna velit, eleifend sit amet magna sit amet, sollicitudin sodales turpis. Praesent bibendum, nunc gravida rutrum consequat, orci nulla pharetra dolor, ut tempus ligula turpis et augue. ',
    plan_pur: true,
    plan_val: 4,
    therapy_done: 2,
    graph_dat: [10, 2, 1, 20, 12, 6, 8, 17, 20, 21],
    emo_dat: [
        {
            id: 1,
            score: 1,
            date: '12/07/21'
        },
        {
            id: 2,
            score: 4,
            date: '13/07/21'
        },
        {
            id: 3,
            score: 10,
            date: '14/07/21'
        },
        {
            id: 4,
            score: 4,
            date: '15/07/21'
        },
        {
            id: 5,
            score: 2,
            date: '16/07/21'
        },

    ]
}
function AdminPage() {
    const [userLoged, setUserLoged] = useState(false);
    const handleSignIn = (e) => {
        e.preventDefault();
        setUserLoged(true);
    }
    return (
        (userLoged) ? (
            <div className='admin'>
                <div className="header flex__center">
                    <input></input>
                    <button>Search</button>
                </div>
                <div className='users__section'>
                    <div>
                        <User UserData={UserData} />
                    </div>
                </div>
                <GoToTop />
            </div>
        ) : (
            <div className="signin__form flex__center">
                <form className="flex__center">
                    <label>Enter your gmail</label>
                    <input type='email'></input>
                    <label>Enter your password</label>
                    <input type='password'></input>
                    <button onClick={(e) => handleSignIn(e)}>Sign In</button>
                </form>
            </div>
        )
    )
}

export default AdminPage
