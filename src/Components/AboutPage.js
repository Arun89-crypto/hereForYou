import React, { useEffect, useState } from 'react'
import './AboutPage.css';
import Footer from './Footer';
import GoToTop from './GoToTop';
import Data from '../JSON/members.json';
import ManikSingh from '../assets/people/ManikSingh.JPG';
import Chief from '../assets/people/Chief.jpeg';
import ShrutiChaubey from '../assets/people/ShrutiChoubey.jpg'
import ShikharRastogi from '../assets/people/ShikharRastogi.jpg'
import Ritika from '../assets/people/Ritika.jpeg'
import Manisha from '../assets/people/Manisha.jpg'
import MadhavMehta from '../assets/people/MadhavMehta.jpg'
import KhushbooYadav from '../assets/people/KhushbooYadav.jpg'
import Kavya from '../assets/people/Kavya.jpeg'
import Mananpreet from '../assets/people/Mananpreet.jpg'
import CharviPareek from '../assets/people/CharviPareek.jpg'
import Aaliya from '../assets/people/Aaliya.jpeg'
import Menu from '../assets/menu.svg';
import { Link } from 'react-router-dom';
import Close from '../assets/close.png';


const main__members = [
    {
        image: Chief
    },
    {
        image: ManikSingh
    },
    {
        image: ManikSingh
    },
    {
        image: ManikSingh
    }
]
const team = [
    {
        image: ShrutiChaubey
    },
    {
        image: ShikharRastogi
    },
    {
        image: Ritika
    },
    {
        image: Manisha
    },
    {
        image: MadhavMehta
    },
    {
        image: KhushbooYadav
    },
    {
        image: Kavya
    },
    {
        image: Mananpreet
    },
    {
        image: CharviPareek
    },
    {
        image: Aaliya
    }
]
function AboutPage() {
    const [nav, setNav] = useState(false);

    const [data, setData] = useState([]);
    useEffect(() => {
        setData(Data);
    }, [data])
    return (
        <>
            <div id="hexagon">
                <img src={(nav) ? Close : Menu} alt='' onClick={
                    () => {
                        setNav(!nav);
                    }
                }></img>
            </div>
            {
                (nav) ? (
                    <div className="navbar">
                        <div>
                            <Link
                                smooth
                                to="/"
                                style={{ textDecoration: 'none' }} className='nav__link'
                                onClick={() => setNav(false)}
                            >
                                Home
                                <div className='underline'></div>
                            </Link>
                            <Link to='/selfhelp' style={{ textDecoration: 'none' }} className='nav__link'>
                                Self Help
                                <div className='underline'></div>
                            </Link>
                            <Link to='/events' style={{ textDecoration: 'none' }} className='nav__link'>
                                Events
                                <div className='underline'></div>
                            </Link>
                        </div>
                    </div>
                ) : ''
            }
            <div className="about__header flex__center">
                <h1>About</h1>
            </div>
            <div className="about__page flex__center">
                <div className="section">
                    <p>‘Here For You ®’ started as an initiative keeping in mind the promise which every Health care provider makes to their clients; an extension of the Hippocrates oath of providing services to those in need. The intention behind Here for You is to decentralize health care services, health information & optimize its utilization using modern technological advances. We are a team of Health Care professionals backed by our technology friends, who aim to be Here for You & all your health care needs. If you have read this far, good because we saved the best for the last, our actual aim is to provide you with best health healthcare professionals, at the click of a button (No more waiting times, at the hospitals or clinics, schedule your appointment & we’re Here for You). Trust us when we say that we are Here For You, we believe in it so much, that we even got a Trademark
                    </p>
                </div>
                <div className="team__section">
                    <h1>Our Team</h1>
                    <div className="main__members flex__center">
                        {
                            Data.main__members.map((m) => {
                                const { name, info, role, id } = m;
                                return (
                                    <div className="member__card flex__center">
                                        <div className="member__image">
                                            <img src={main__members[id]['image']} alt='' className="member__image"></img>
                                        </div>
                                        <h2>{name}</h2>
                                        <h3>[{role}]</h3>
                                        <p>{info}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="team">
                        {
                            Data.team_members.map((m) => {
                                const { name, id } = m;
                                return (
                                    <div className="member__card flex__center small">
                                        <div className="member__image ">
                                            <img src={team[id]['image']} alt=''></img>
                                        </div>
                                        <h2>{name}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
            <GoToTop />
        </>
    )
}

export default AboutPage
