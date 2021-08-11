import React, { useEffect, useState } from 'react'
import Eventdata from '../../JSON/events.json';
import './EventsPage.css';
import Menu from '../../assets/menu.svg';
import { Link } from 'react-router-dom';
import Close from '../../assets/close.png';
import Footer from '../Footer/Footer';
import GoToTop from '../GoToTop';


function EventsPage() {
    const [events, setEvents] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const data = Eventdata["current_events"];
    const data_u = Eventdata["upcoming_events"];
    const [nav, setNav] = useState(false);
    useEffect(() => {
        setEvents(data);
        setUpcoming(data_u);
    }, [data_u, data]);
    return (
        <>
            <div className="events__page__header flex__center">
                <h1>Events</h1>
            </div>
            <div className="events__page">
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
                                <Link to='/about' style={{ textDecoration: 'none' }} className='nav__link'>
                                    About
                                    <div className='underline'></div>
                                </Link>
                            </div>
                        </div>
                    ) : ''
                }

                <div className="upcoming__events">
                    <h1>Upcoming Events</h1>
                    <div className="upcoming_events_container">
                        {
                            upcoming.map((event) => {
                                const { name, image, desc, link, date } = event;
                                return <div className="event__card">
                                    <img src={image} alt=''></img>
                                    <div>
                                        <p className="date__ecard">{date}</p>
                                        <h2>{name}</h2>
                                        <p>{desc}</p>
                                        <a href={link} target='_blank' rel="noreferrer">
                                            <button>Register</button>
                                        </a>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="current__events">
                    <h1>Events</h1>
                    <div className="events_container">
                        {
                            events.map((event) => {
                                const { name, image, meetLink, date, time, desc, ongoing, free } = event;
                                return <div className="event__card">
                                    <img src={image} alt=''></img>
                                    <div>
                                        <div>
                                            <p className="date__ecard">{date}</p>
                                            <p className="date__ecard">{time}</p>
                                        </div>
                                        <h2>{name}</h2>
                                        <p>{desc}</p>
                                        {
                                            (ongoing && free) ? (
                                                <button>{meetLink}</button>
                                            ) : ''
                                        }
                                    </div>
                                </div>
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

export default EventsPage
