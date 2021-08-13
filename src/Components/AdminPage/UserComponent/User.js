import React from 'react';
import { Line } from 'react-chartjs-2';
import './User.css';


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
function User({ UserData }) {
    return (
        <div className="user_info">
            <div>
                <h2>{UserData.name}</h2>
                <p>phone : {UserData.phone}</p>
                <p>age : {UserData.age}</p>
                <p>language preference : {UserData.lang_pref}</p>
                <p>Therapist gender preference : {UserData.gen_pref}</p>
                <div className="therapy">
                    {
                        (UserData.plan_pur) ? (
                            <div className="flex__center">
                                <button>-</button>
                                <p>Therapy done : {UserData.therapy_done}/{UserData.plan_val}</p>
                                <button>+</button>
                            </div>
                        ) : (
                            <div>
                                <h2>No plan purchased</h2>
                            </div>
                        )
                    }
                </div>
                <p>{UserData.history}</p>
            </div>
            <div className='graphandemoji'>
                <div>
                    <Line
                        data={{
                            labels: [
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
                            ],
                            datasets: [
                                {
                                    label: 'Mood Radar',
                                    data: UserData.graph_dat,
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
                        UserData.emo_dat.map((e) => {
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
            </div>
        </div>
    )
}

export default User
