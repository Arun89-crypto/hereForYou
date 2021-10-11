import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import HomeButton from '../../assets/home.png';
import Graph from '../../assets/graph.png';
import Sessions from '../../assets/exam-paper.png';
import { Link } from 'react-router-dom';
import LogOut from '../../assets/log.png';
import { HashLink as AppLink } from 'react-router-hash-link';
import { Line } from 'react-chartjs-2';
import PlanCard from '../PlanCard';
import Close from '../../assets/close.png';
import Info from '../../assets/info.svg';

const data = [
    {
        id: 1,
        score: 0,
        date: '12/07/21'
    },
    {
        id: 2,
        score: 3,
        date: '13/07/21'
    },
    {
        id: 4,
        score: 3,
        date: '15/07/21'
    },
    {
        id: 5,
        score: 1,
        date: '16/07/21'
    },
    {
        id: 7,
        score: 5,
        date: '18/07/21'
    },
    {
        id: 9,
        score: 3,
        date: '20/07/21'
    },
    {
        id: 10,
        score: 5,
        date: '21/07/21'
    }
]
const emojis = [
    '😡',
    '😠',
    '😭',
    '😢',
    '😞',
    '🙂'
]
const coupons = [
    {
        id: 1,
        name: '7 days',
        desc: 'Get 5% off on Premium',
        img: 'https://images.pexels.com/photos/3705368/pexels-photo-3705368.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    },
    {
        id: 2,
        name: '15 days',
        desc: 'Get 5% off on Pro',
        img: 'https://images.pexels.com/photos/2305099/pexels-photo-2305099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        id: 3,
        name: '30 days',
        desc: 'Get 5% off on Intermediate',
        img: 'https://images.pexels.com/photos/3530056/pexels-photo-3530056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        id: 4,
        name: '60 days',
        desc: 'Get 10% off on Basic',
        img: 'https://images.pexels.com/photos/3753025/pexels-photo-3753025.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    },
]
const cards = [
    {
        name: "4 sessions combo",
        price: "₹4,399.00"
    },
    {
        name: "8 sessions combo",
        price: "₹8,399.00"
    },
    {
        name: "IQ Assignment",
        price: "₹1,500.00"
    },
    {
        name: "Personality Assessment",
        price: "₹1,500.00"
    },
]
function Dashboard() {
    const handleEmojiClick = (value) => {
        //to backend function(time clicked and all that data)
        //use the value in the function {value = index of the element in the array}
        setInsert(false);
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setInsert(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    const [insert, setInsert] = useState(false);
    return (
        <div className="dashboard flex__spacebetween">
            <div className="navigation__bar__d flex__center">
                <div className='flex__center__vert'>
                    <AppLink
                        smooth
                        to="/dashboard/#main__d"
                        style={{ textDecoration: 'none' }}
                    >
                        <button className="flex__spacebetween">
                            <img src={HomeButton} alt=''></img>
                            <p>Main</p>
                        </button>
                    </AppLink>
                    <AppLink
                        smooth
                        to="/dashboard/#graph__d"
                        style={{ textDecoration: 'none' }}
                    >
                        <button className="flex__spacebetween">
                            <img src={Graph} alt=''></img>
                            <p>Mood Graph</p>
                        </button>
                    </AppLink>
                    <AppLink
                        smooth
                        to="/dashboard/#sessions__d"
                        style={{ textDecoration: 'none' }}
                    >
                        <button className="flex__spacebetween">
                            <img src={Sessions} alt=''></img>
                            <p>Sessions</p>
                        </button>
                    </AppLink>
                    <AppLink
                        smooth
                        to="/dashboard/#info__d"
                        style={{ textDecoration: 'none' }}
                    >
                        <button className="flex__spacebetween">
                            <img src={Info} alt=''></img>
                            <p>Info</p>
                        </button>
                    </AppLink>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <button className="flex__spacebetween">
                            <img src={LogOut} alt=''></img>
                            <p>Log Out</p>
                        </button>
                    </Link>
                </div>
                <div className="account__pic__d">
                </div>
            </div>
            <div className="body__d flex__spacebetween">
                <Main />
                <GraphPage />
                <SessionsPage />
                <InfoPage />
            </div>
            {
                (insert) ? (
                    <div className='mood__insert__div flex__center'>
                        <div className="mood__insert">
                            <img className='close__insert' src={Close} alt='' onClick={() => setInsert(false)}></img>
                            <h1>How you feel today ?</h1>
                            <div className="emojis__div">
                                {
                                    emojis.map((e, index) =>
                                        <button onClick={() => {
                                            handleEmojiClick(index);
                                            console.log(index);
                                        }}>{e}</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ) : ''
            }
        </div>
    )
}
const Main = () => {
    return (
        <div id='main__d' className="main__d flex__spacebetween">
            <div className="info__d flex__spacebetween">
                <div>
                    <h2>Name</h2>
                    <p>E-mail</p>
                </div>
                <div>
                    <p>Sessions count</p>
                    <p className="counter__sessions">2/4</p>
                </div>
            </div>
            <div className="badges__d flex__center">
                <div className="badges__cards">
                    {
                        coupons.map((c) => {
                            const { id, name, desc, img } = c;
                            return (
                                <div className="coupon__cards flex__spacebetween" id={id} style={{ background: `url(${img}),linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))` }}>
                                    <h2>{name}</h2>
                                    <p>{desc}</p>
                                    <div className='coupon__card__overlay flex__center'>
                                        <h1>XDF567A</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
const GraphPage = () => {

    const [Data, setData] = useState([]);
    const emoData = data;
    let emojiArray = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < emoData.length; i++) {
        emojiArray[emoData[i].score] += 1;
    }
    useEffect(() => {
        setData(emojiArray)
    }, []);
    return (
        <>
            <h1 className='heading__graph' id='graph__d'>Mood Graph</h1>
            <div>
                <Line
                    data={{
                        labels: [
                            '😡',
                            '😠',
                            '😭',
                            '😢',
                            '😞',
                            '🙂'
                        ],
                        datasets: [
                            {
                                label: 'Mood Radar',
                                data: Data,
                                fill: true,
                                backgroundColor: 'rgba(255,107,107, 0.2)',
                                borderColor: '#ff6b6b',
                                pointBackgroundColor: '#ff6b6b',
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: '#ff6b6b',
                                tension: 0.4,
                            }
                        ]
                    }}
                    options={{
                        scales: {
                            y: {
                                type: 'linear',
                                grace: '5%',
                                min: 0,
                                title: {
                                    text: 'Counts',
                                    color: '#ff6b6b',
                                    display: true,
                                }
                            },
                            x: {
                                title: {
                                    text: 'Mood Score',
                                    color: '#ff6b6b',
                                    display: true,

                                }
                            }
                        },
                        maintainAspectRatio: false,
                    }}
                    className="radar" />
            </div>
            <div className='previous__data'>
                {
                    data.map((e) => {
                        const { id, score, date } = e;
                        return (
                            <div className='score__card flex__center' key={id} onClick={() => { }}>
                                <p>{emojis[score]}</p>
                                <p className="date__d">{date}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
const SessionsPage = () => {
    return (
        <div id='sessions__d' className='sessions__d'>
            <div className="lower">
                <div className="book__session__button flex__center">
                    <h1>Book Session</h1>
                    <a href='https://store64241106.company.site/' target='_blank' rel='noreferrer'>
                        <button>Go to Shop &#8594;</button>
                    </a>
                </div>
                <div className="book__sessions">
                    {
                        cards.map((item) => {
                            const { name, price } = item;
                            return (
                                <PlanCard name={name} price={price}></PlanCard>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
const InfoPage = () => {
    const [name, setName] = useState('Enter your name');
    const [editName, setEditName] = useState(false);
    // here we will write the function for pushing the name in db
    const [phone, setPhone] = useState('Enter your phone number');
    const [editPhone, setEditPhone] = useState(false);
    // here we will write the function for pushing the phone in db
    const [age, setAge] = useState('Enter your Age');
    const [editAge, setEditAge] = useState(false);
    // here we will write the function for pushing the age in db
    const [language, setLanguage] = useState('Enter your language preferences');
    const [editLanguage, setEditLanguage] = useState(false);
    // here we will write the function for pushing the language in db
    const [therapist, setTherapist] = useState('Enter your gender preference(Therapist)');
    const [editTherapist, setEditTherapist] = useState(false);
    // here we will write the function for pushing the therapist in db
    const [history, setHistory] = useState('If you have any medical/mental history please add');
    const [editHistory, setEditHistory] = useState(false);
    // here we will write the function for pushing the history in db
    return (
        <div className="info__page" id='info__d'>
            <h1>Info</h1>
            <div className="info__portal flex__center">
                <p className="field__title">Name</p>
                <div className="feild flex__center">
                    <div>
                        {
                            (editName) ? (
                                <input type='text' id='name__field' value={name} onChange={(e) => setName(e.target.value)}></input>
                            ) : (
                                <p>{name}</p>
                            )
                        }
                    </div>
                    <div>
                        {
                            (editName) ? (
                                <div>

                                    <button onClick={() => setEditName(false)}>
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='edit__img'><rect x="7" y="14" width="4" height="4" /><path d="M20.12,8.71,15.29,3.88A3,3,0,0,0,13.17,3H10V9h5a1,1,0,0,1,0,2H9a1,1,0,0,1-1-1V3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H8V17a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v4h2a3,3,0,0,0,3-3V10.83A3,3,0,0,0,20.12,8.71Z" transform="translate(-3 -3)" /></svg>
                                    </button>
                                    <button onClick={() => setEditName(false)}>
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.99 14.99" className='edit__img'><path d="M8,.5a7.5,7.5,0,1,0,5.3,2.2A7.44,7.44,0,0,0,8,.5Zm0,1A6.51,6.51,0,1,1,1.5,8c0-.21,0-.42,0-.62A6.48,6.48,0,0,1,8,1.5ZM10.47,5h0a.53.53,0,0,0-.34.15L8,7.29,5.88,5.17A.55.55,0,0,0,5.52,5a.5.5,0,0,0-.35.86L7.29,8,5.17,10.12a.5.5,0,0,0,.69.72h0L8,8.71l2.12,2.12a.5.5,0,0,0,.71,0,.49.49,0,0,0,0-.7v0L8.71,8l2.12-2.12a.5.5,0,0,0,0-.71A.46.46,0,0,0,10.47,5Z" transform="translate(-0.5 -0.5)" /></svg>
                                    </button>
                                </div>
                            ) : (
                                <button onClick={() => setEditName(true)}>
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='edit__img' style={{ fill: "#A9A9A9" }}><path d="M3,17.46v3a.5.5,0,0,0,.5.5h3a.47.47,0,0,0,.35-.15L17.81,9.94,14.06,6.19,3.15,17.1A.49.49,0,0,0,3,17.46ZM20.71,7a1,1,0,0,0,0-1.41L18.37,3.29a1,1,0,0,0-1.41,0L15.13,5.12l3.75,3.75Z" transform="translate(-3 -3)" /></svg>
                                </button>
                            )
                        }

                    </div>
                </div>
                <p className="field__title">Phone Number</p>
                <div className="feild flex__center">
                    <div>
                        {
                            (editPhone) ? (
                                <input type='text' id='phone__field' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                            ) : (
                                <p>{phone}</p>
                            )
                        }
                    </div>
                    <div>
                        {
                            (editPhone) ? (
                                <div>

                                    <button onClick={() => setEditPhone(false)}>
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='edit__img'><rect x="7" y="14" width="4" height="4" /><path d="M20.12,8.71,15.29,3.88A3,3,0,0,0,13.17,3H10V9h5a1,1,0,0,1,0,2H9a1,1,0,0,1-1-1V3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H8V17a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v4h2a3,3,0,0,0,3-3V10.83A3,3,0,0,0,20.12,8.71Z" transform="translate(-3 -3)" /></svg>
                                    </button>
                                    <button onClick={() => setEditPhone(false)}>
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.99 14.99" className='edit__img'><path d="M8,.5a7.5,7.5,0,1,0,5.3,2.2A7.44,7.44,0,0,0,8,.5Zm0,1A6.51,6.51,0,1,1,1.5,8c0-.21,0-.42,0-.62A6.48,6.48,0,0,1,8,1.5ZM10.47,5h0a.53.53,0,0,0-.34.15L8,7.29,5.88,5.17A.55.55,0,0,0,5.52,5a.5.5,0,0,0-.35.86L7.29,8,5.17,10.12a.5.5,0,0,0,.69.72h0L8,8.71l2.12,2.12a.5.5,0,0,0,.71,0,.49.49,0,0,0,0-.7v0L8.71,8l2.12-2.12a.5.5,0,0,0,0-.71A.46.46,0,0,0,10.47,5Z" transform="translate(-0.5 -0.5)" /></svg>
                                    </button>
                                </div>
                            ) : (
                                <button onClick={() => setEditPhone(true)}>
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='edit__img' style={{ fill: "#A9A9A9" }}><path d="M3,17.46v3a.5.5,0,0,0,.5.5h3a.47.47,0,0,0,.35-.15L17.81,9.94,14.06,6.19,3.15,17.1A.49.49,0,0,0,3,17.46ZM20.71,7a1,1,0,0,0,0-1.41L18.37,3.29a1,1,0,0,0-1.41,0L15.13,5.12l3.75,3.75Z" transform="translate(-3 -3)" /></svg>
                                </button>
                            )
                        }

                    </div>
                </div>
                <p className="field__title">Age</p>
                <div className="feild flex__center">
                    <div>
                        {
                            (editAge) ? (
                                <input type='text' id='age__field' value={age} onChange={(e) => setAge(e.target.value)}></input>
                            ) : (
                                <p>{age}</p>
                            )
                        }
                    </div>
                    <div>
                        {
                            (editAge) ? (
                                <div>

                                    <button onClick={() => setEditAge(false)}>
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='edit__img'><rect x="7" y="14" width="4" height="4" /><path d="M20.12,8.71,15.29,3.88A3,3,0,0,0,13.17,3H10V9h5a1,1,0,0,1,0,2H9a1,1,0,0,1-1-1V3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H8V17a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v4h2a3,3,0,0,0,3-3V10.83A3,3,0,0,0,20.12,8.71Z" transform="translate(-3 -3)" /></svg>
                                    </button>
                                    <button onClick={() => setEditAge(false)}>
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.99 14.99" className='edit__img'><path d="M8,.5a7.5,7.5,0,1,0,5.3,2.2A7.44,7.44,0,0,0,8,.5Zm0,1A6.51,6.51,0,1,1,1.5,8c0-.21,0-.42,0-.62A6.48,6.48,0,0,1,8,1.5ZM10.47,5h0a.53.53,0,0,0-.34.15L8,7.29,5.88,5.17A.55.55,0,0,0,5.52,5a.5.5,0,0,0-.35.86L7.29,8,5.17,10.12a.5.5,0,0,0,.69.72h0L8,8.71l2.12,2.12a.5.5,0,0,0,.71,0,.49.49,0,0,0,0-.7v0L8.71,8l2.12-2.12a.5.5,0,0,0,0-.71A.46.46,0,0,0,10.47,5Z" transform="translate(-0.5 -0.5)" /></svg>
                                    </button>
                                </div>
                            ) : (
                                <button onClick={() => setEditAge(true)}>
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='edit__img' style={{ fill: "#A9A9A9" }}><path d="M3,17.46v3a.5.5,0,0,0,.5.5h3a.47.47,0,0,0,.35-.15L17.81,9.94,14.06,6.19,3.15,17.1A.49.49,0,0,0,3,17.46ZM20.71,7a1,1,0,0,0,0-1.41L18.37,3.29a1,1,0,0,0-1.41,0L15.13,5.12l3.75,3.75Z" transform="translate(-3 -3)" /></svg>
                                </button>
                            )
                        }

                    </div>
                </div>
                <p className="field__title">Language preference</p>
                <div className="feild flex__center">
                    <div>
                        {
                            (editLanguage) ? (
                                <input type='text' id='lang__field' value={language} onChange={(e) => setLanguage(e.target.value)}></input>
                            ) : (
                                <p>{language}</p>
                            )
                        }
                    </div>
                    <div>
                        {
                            (editLanguage) ? (
                                <div>

                                    <button onClick={() => setEditLanguage(false)}>
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='edit__img'><rect x="7" y="14" width="4" height="4" /><path d="M20.12,8.71,15.29,3.88A3,3,0,0,0,13.17,3H10V9h5a1,1,0,0,1,0,2H9a1,1,0,0,1-1-1V3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H8V17a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v4h2a3,3,0,0,0,3-3V10.83A3,3,0,0,0,20.12,8.71Z" transform="translate(-3 -3)" /></svg>
                                    </button>
                                    <button onClick={() => setEditLanguage(false)}>
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.99 14.99" className='edit__img'><path d="M8,.5a7.5,7.5,0,1,0,5.3,2.2A7.44,7.44,0,0,0,8,.5Zm0,1A6.51,6.51,0,1,1,1.5,8c0-.21,0-.42,0-.62A6.48,6.48,0,0,1,8,1.5ZM10.47,5h0a.53.53,0,0,0-.34.15L8,7.29,5.88,5.17A.55.55,0,0,0,5.52,5a.5.5,0,0,0-.35.86L7.29,8,5.17,10.12a.5.5,0,0,0,.69.72h0L8,8.71l2.12,2.12a.5.5,0,0,0,.71,0,.49.49,0,0,0,0-.7v0L8.71,8l2.12-2.12a.5.5,0,0,0,0-.71A.46.46,0,0,0,10.47,5Z" transform="translate(-0.5 -0.5)" /></svg>
                                    </button>
                                </div>
                            ) : (
                                <button onClick={() => setEditLanguage(true)}>
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='edit__img' style={{ fill: "#A9A9A9" }}><path d="M3,17.46v3a.5.5,0,0,0,.5.5h3a.47.47,0,0,0,.35-.15L17.81,9.94,14.06,6.19,3.15,17.1A.49.49,0,0,0,3,17.46ZM20.71,7a1,1,0,0,0,0-1.41L18.37,3.29a1,1,0,0,0-1.41,0L15.13,5.12l3.75,3.75Z" transform="translate(-3 -3)" /></svg>
                                </button>
                            )
                        }

                    </div>
                </div>
                <p className="field__title">Gender preference (Therapist)</p>
                <div className="feild flex__center">
                    <div>
                        {
                            (editTherapist) ? (
                                <input type='text' id='therapist__field' value={therapist} onChange={(e) => setTherapist(e.target.value)}></input>
                            ) : (
                                <p>{therapist}</p>
                            )
                        }
                    </div>
                    <div>
                        {
                            (editTherapist) ? (
                                <div>

                                    <button onClick={() => setEditTherapist(false)}>
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='edit__img'><rect x="7" y="14" width="4" height="4" /><path d="M20.12,8.71,15.29,3.88A3,3,0,0,0,13.17,3H10V9h5a1,1,0,0,1,0,2H9a1,1,0,0,1-1-1V3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H8V17a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v4h2a3,3,0,0,0,3-3V10.83A3,3,0,0,0,20.12,8.71Z" transform="translate(-3 -3)" /></svg>
                                    </button>
                                    <button onClick={() => setEditTherapist(false)}>
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.99 14.99" className='edit__img'><path d="M8,.5a7.5,7.5,0,1,0,5.3,2.2A7.44,7.44,0,0,0,8,.5Zm0,1A6.51,6.51,0,1,1,1.5,8c0-.21,0-.42,0-.62A6.48,6.48,0,0,1,8,1.5ZM10.47,5h0a.53.53,0,0,0-.34.15L8,7.29,5.88,5.17A.55.55,0,0,0,5.52,5a.5.5,0,0,0-.35.86L7.29,8,5.17,10.12a.5.5,0,0,0,.69.72h0L8,8.71l2.12,2.12a.5.5,0,0,0,.71,0,.49.49,0,0,0,0-.7v0L8.71,8l2.12-2.12a.5.5,0,0,0,0-.71A.46.46,0,0,0,10.47,5Z" transform="translate(-0.5 -0.5)" /></svg>
                                    </button>
                                </div>
                            ) : (
                                <button onClick={() => setEditTherapist(true)}>
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='edit__img' style={{ fill: "#A9A9A9" }}><path d="M3,17.46v3a.5.5,0,0,0,.5.5h3a.47.47,0,0,0,.35-.15L17.81,9.94,14.06,6.19,3.15,17.1A.49.49,0,0,0,3,17.46ZM20.71,7a1,1,0,0,0,0-1.41L18.37,3.29a1,1,0,0,0-1.41,0L15.13,5.12l3.75,3.75Z" transform="translate(-3 -3)" /></svg>
                                </button>
                            )
                        }

                    </div>
                </div>
                <p className="field__title">Any Medical history</p>
                <div className="feild flex__center">
                    <div>
                        {
                            (editHistory) ? (
                                <textarea type='text' id='therapist__field' value={history} onChange={(e) => setHistory(e.target.value)}></textarea>
                            ) : (
                                <p>{history}</p>
                            )
                        }
                    </div>
                    <div>
                        {
                            (editHistory) ? (
                                <div>

                                    <button onClick={() => setEditHistory(false)}>
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='edit__img'><rect x="7" y="14" width="4" height="4" /><path d="M20.12,8.71,15.29,3.88A3,3,0,0,0,13.17,3H10V9h5a1,1,0,0,1,0,2H9a1,1,0,0,1-1-1V3H6A3,3,0,0,0,3,6V18a3,3,0,0,0,3,3H8V17a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2v4h2a3,3,0,0,0,3-3V10.83A3,3,0,0,0,20.12,8.71Z" transform="translate(-3 -3)" /></svg>
                                    </button>
                                    <button onClick={() => setEditHistory(false)}>
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.99 14.99" className='edit__img'><path d="M8,.5a7.5,7.5,0,1,0,5.3,2.2A7.44,7.44,0,0,0,8,.5Zm0,1A6.51,6.51,0,1,1,1.5,8c0-.21,0-.42,0-.62A6.48,6.48,0,0,1,8,1.5ZM10.47,5h0a.53.53,0,0,0-.34.15L8,7.29,5.88,5.17A.55.55,0,0,0,5.52,5a.5.5,0,0,0-.35.86L7.29,8,5.17,10.12a.5.5,0,0,0,.69.72h0L8,8.71l2.12,2.12a.5.5,0,0,0,.71,0,.49.49,0,0,0,0-.7v0L8.71,8l2.12-2.12a.5.5,0,0,0,0-.71A.46.46,0,0,0,10.47,5Z" transform="translate(-0.5 -0.5)" /></svg>
                                    </button>
                                </div>
                            ) : (
                                <button onClick={() => setEditHistory(true)}>
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className='edit__img' style={{ fill: "#A9A9A9" }}><path d="M3,17.46v3a.5.5,0,0,0,.5.5h3a.47.47,0,0,0,.35-.15L17.81,9.94,14.06,6.19,3.15,17.1A.49.49,0,0,0,3,17.46ZM20.71,7a1,1,0,0,0,0-1.41L18.37,3.29a1,1,0,0,0-1.41,0L15.13,5.12l3.75,3.75Z" transform="translate(-3 -3)" /></svg>
                                </button>
                            )
                        }

                    </div>
                </div>
            </div>
            <button className='delete__account__button'>Delete Account</button>
        </div>
    )
}
export default Dashboard
