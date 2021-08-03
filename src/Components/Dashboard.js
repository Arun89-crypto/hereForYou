import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import HomeButton from '../assets/home.png';
import Graph from '../assets/graph.png';
import Sessions from '../assets/exam-paper.png';
import { Link } from 'react-router-dom';
import LogOut from '../assets/log.png';
import { HashLink as AppLink } from 'react-router-hash-link';
import ProgressBar from "@ramonak/react-progress-bar";
import { Line } from 'react-chartjs-2';
import PlanCard from './PlanCard';
import Dino from '../assets/dino.svg'
import Close from '../assets/close.png';
import { commerce } from '../lib/Commerce';


const data = [
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
    {
        id: 6,
        score: 8,
        date: '17/07/21'
    },
    {
        id: 7,
        score: 6,
        date: '18/07/21'
    },
    {
        id: 8,
        score: 8,
        date: '19/07/21'
    },
    {
        id: 9,
        score: 4,
        date: '20/07/21'
    },
    {
        id: 10,
        score: 6,
        date: '21/07/21'
    }
]
const emojis = [
    '😡',
    '😠',
    '😭',
    '😢',
    '😞',
    '🙂',
    '😊',
    '😃',
    '😇',
    '😂'
]
const upcomingSessions = [
    {
        id: 1,
        name_of_taker: 'Mrs. Judith',
        img: 'https://picsum.photos/200',
        date: '12/7/21'
    },
    {
        id: 2,
        name_of_taker: 'Mr. Anish',
        img: 'https://picsum.photos/300',
        date: '15/7/21'
    },
    {
        id: 3,
        name_of_taker: 'Mr. Rajesh',
        img: 'https://picsum.photos/400',
        date: '15/7/21'
    }
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


function Dashboard() {

    useEffect(() => {
        const timer = setTimeout(() => {
            setInsert(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    const [insert, setInsert] = useState(false);


    //fetching the products

    useEffect(() => {
        fetchProducts();
    }, [])
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
        console.log(data);
    }

    return (
        <div className="dashboard flex__spacebetween">
            <div className="navigation__bar__d flex__center">
                <div>
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
                <SessionsPage products={products} />
            </div>
            {
                (insert) ? (
                    <div className='mood__insert__div flex__center'>
                        <div className="mood__insert">
                            <img className='close__insert' src={Close} alt='' onClick={() => setInsert(false)}></img>
                            <h1>How you feel today ?</h1>
                            <div className="emojis__div">
                                {
                                    emojis.map((e) => {
                                        return (
                                            <button >{e}</button>
                                        )
                                    })
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
        <div id='main__d' className="main__d flex__center">
            <div className="stats__d flex__center">
                <div>
                    <div>
                        <h2>Sessions Done</h2>
                        <h1>12</h1>
                    </div>
                    <div>
                        <h2>Improvement</h2>
                        <h1>80%</h1>
                        <ProgressBar completed={80} width='120px' bgColor='#ff6b6b' isLabelVisible={false} />
                    </div>
                </div>
                <img src={Dino} alt=''></img>
            </div>
            <div className="badges__d flex__center">
                <h1>Badges Earned</h1>
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
    return (
        <>
            <div id='graph__d'>
                <Line
                    data={{
                        labels: [
                            '😡 (1)',
                            '😠 (2)',
                            '😭 (3)',
                            '😢 (4)',
                            '😞 (5)',
                            '🙂 (6)',
                            '😊 (7)',
                            '😃 (8)',
                            '😇 (9)',
                            '😂 (10)'
                        ],
                        datasets: [
                            {
                                label: 'Mood Radar',
                                data: [10, 2, 1, 20, 12, 6, 8, 17, 20, 21],
                                fill: true,
                                backgroundColor: 'rgba(255,107,107, 0.2)',
                                borderColor: '#ff6b6b',
                                pointBackgroundColor: '#ff6b6b',
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: '#ff6b6b'
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
                            <div className='score__card flex__center' key={id}>
                                <p>{emojis[score - 1]}</p>
                                <p className="date__d">{date}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
const SessionsPage = ({ products }) => {
    return (
        <div id='sessions__d' className='sessions__d'>
            <div className="upper">
                <h1>Sessions</h1>
                <div className="upcoming__sessions flex__center">
                    {
                        upcomingSessions.map((session) => {
                            const { name_of_taker, id, img, date } = session;
                            return (
                                <div className=
                                    "session__card flex__center" key={id}>
                                    <div>
                                        <h2>{name_of_taker}</h2>
                                        <p>{date}</p>
                                    </div>
                                    <img src={img} alt=''></img>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="lower">
                <h1>Book Session</h1>
                <div className="book__sessions">
                    {
                        products.map((item) => {
                            return (
                                <PlanCard id={item.id} name={item.name} price={item.price.formatted_with_symbol} desc={item.description}></PlanCard>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Dashboard
