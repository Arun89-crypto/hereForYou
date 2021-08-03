import React, { useState } from 'react'
import Close from '../assets/close.png';
import Depression from '../assets/Psychosis.jpeg';
import { Line } from 'react-chartjs-2';
import ProgressBar from "@ramonak/react-progress-bar";


const QuestionsAssesment = [
    {
        id: 1,
        question: 'Little interest or pleasure in doing things?',
        catag: 'Depression'
    },
    {
        id: 2,
        question: 'Feeling down, depressed, or hopeless?',
        catag: 'Depression'
    },
    {
        id: 3,
        question: 'Feeling more irritated, grouchy, or angry than usual?',
        catag: 'Anger'
    },
    {
        id: 4,
        question: 'Sleeping less than usual, but still have a lot of energy?',
        catag: 'Mania'
    },
    {
        id: 5,
        question: 'Starting lots more projects than usual or doing more risky things than usual?',
        catag: 'Mania'
    },
    {
        id: 6,
        question: 'Feeling nervous, anxious, frightened, worried, or on edge?',
        catag: 'Anxiety'
    },
    {
        id: 7,
        question: 'Feeling panic or being frightened?',
        catag: 'Anxiety'
    },
    {
        id: 8,
        question: 'Avoiding situations that make you anxious?',
        catag: 'Anxiety'
    },
    {
        id: 9,
        question: 'Unexplained aches and pains (e.g., head, back, joints, abdomen, legs)?',
        catag: 'Somatic Symptoms'
    },
    {
        id: 10,
        question: 'Feeling that your illnesses are not being taken seriously enough?',
        catag: 'Somatic Symptoms'
    },
    {
        id: 11,
        question: 'Thoughts of actually hurting yourself?',
        catag: 'Suicidal Ideation'
    },
    {
        id: 12,
        question: 'Hearing things other people couldn’t hear, such as voices even when no one was around?',
        catag: 'Psychosis'
    },
    {
        id: 13,
        question: 'Feeling that someone could hear your thoughts, or that you could hear what another person was thinking?',
        catag: 'Psychosis'
    },
    {
        id: 14,
        question: 'Problems with sleep that affected your sleep quality over all?',
        catag: 'Sleep Problems'
    },
    {
        id: 15,
        question: 'Problems with memory (e.g., learning new information) or with location (e.g., finding your way home)?',
        catag: 'Memory'
    },
    {
        id: 16,
        question: 'Unpleasant thoughts, urges, or images that repeatedly enter your mind?',
        catag: 'Repetitive Thoughts and Behaviors'
    },
    {
        id: 17,
        question: 'Feeling driven to perform certain behaviors or mental acts over and over again?',
        catag: 'Repetitive Thoughts and Behaviors'
    },
    {
        id: 18,
        question: 'Feeling detached or distant from yourself, your body, your physical surroundings, or your memories?',
        catag: 'Dissociation'
    },
    {
        id: 19,
        question: 'Not knowing who you really are or what you want out of life?',
        catag: 'Personality Functioning'
    },
    {
        id: 20,
        question: 'Not feeling close to other people or enjoying your relationships with them?',
        catag: 'Personality Functioning'
    },
    {
        id: 21,
        question: 'Drinking at least 4 drinks of any kind of alcohol in a single day?',
        catag: 'Substance Use'
    },
    {
        id: 22,
        question: 'Smoking any cigarettes, a cigar, or pipe, or using snuff or chewing tobacco?',
        catag: 'Substance Use'
    },
    {
        id: 23,
        question: 'Using any of the following medicines ON YOUR OWN, that is, without a doctor’s prescription, in greater amounts or longer than prescribed [e.g., painkillers (like Vicodin), stimulants (like Ritalin or Adderall), sedatives or tranquilizers (like sleeping pills or Valium), or drugs like marijuana, cocaine or crack, club drugs (like ecstasy), hallucinogens (like LSD), heroin, inhalants or solvents (like glue), or methamphetamine (like speed)]?',
        catag: 'Substance Use'
    },
]

function SelfAssesment({ setAssesment }) {
    const [question, setQuestion] = useState(0);
    const [showQ, setShowQ] = useState(true);
    const [array, setArray] = useState([]);
    const [conditions, setconditions] = useState([]);
    const [bar, setBar] = useState(0);
    const result = (array) => {
        if (array[0] >= 2 || array[1] >= 2) {
            conditions.push('Depression');
        }
        if (array[2] >= 2) {
            conditions.push('Anger');
        }
        if (array[3] >= 2 || array[4] >= 2) {
            conditions.push('Mania');
        }
        if (array[5] >= 1 || array[6] >= 1 || array[7] >= 2) {
            conditions.push('Anxiety');
        }
        if (array[8] >= 2 || array[9] >= 2) {
            conditions.push('Somatic Symptoms');
        }
        if (array[10] >= 1) {
            conditions.push('Suicidal Ideation');
        }
        if (array[11] >= 1 || array[12] >= 1) {
            conditions.push('Psychosis');
        }
        if (array[13] >= 2) {
            conditions.push('Sleep Problems');
        }
        if (array[14] >= 2) {
            conditions.push('Memory');
        }
        if (array[15] >= 2 || array[16] >= 2) {
            conditions.push('Repetitive Thoughts and Behaviors');
        }
        if (array[17] >= 2) {
            conditions.push('Dissociation');
        }
        if (array[18] >= 2 || array[19] >= 2) {
            conditions.push('Personality Functioning');
        }
        if (array[20] >= 1 || array[21] >= 1 || array[22] >= 2) {
            conditions.push('Substance Use');
        }
        console.log(conditions);
    }
    const HandleClick = (e) => {
        if (question === 22) {
            array.push(e.target.innerHTML);
            result(array);
            setShowQ(false)
            setBar(bar + 12);
        } else {
            array.push(e.target.innerHTML);
            setQuestion(question + 1);
            setBar(bar + 4);
        }
        console.log(array);
    }
    return (
        <div className="self__assesment">
            <img src={Close} width="40px" className="close__btn__sa" onClick={() => { setAssesment(false); setArray([]); setQuestion(0); setconditions([]) }} alt=''></img>
            {
                (showQ) ? (
                    <div className="main__assesment">
                        <div className="left__main__assesment flex__center">
                            <img src={Depression} alt=''></img>
                        </div>
                        <div className="right__main__assesment flex__center">
                            <p>{question + 1}/23</p>
                            <div className="question__assesment">
                                <h2>{QuestionsAssesment[question]['question']}</h2>
                            </div>
                            <div className="answer__assesment">
                                <button onClick={(e) => HandleClick(e)}>0</button>
                                <button onClick={(e) => HandleClick(e)}>1</button>
                                <button onClick={(e) => HandleClick(e)}>2</button>
                                <button onClick={(e) => HandleClick(e)}>3</button>
                                <button onClick={(e) => HandleClick(e)}>4</button>
                            </div>
                            <div className="score__details">
                                <p>
                                    [0] = None (Not at all) <br></br>
                                    [1] = Slight (Rare, less than a day or two) <br></br>
                                    [2] = Mild (Several days) <br></br>
                                    [3] = Moderate (More than half the days) <br></br>
                                    [4] = Severe (Nearly every day) <br></br>
                                </p>
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className="main__assesment__r start__align">
                        <div className="result__r">
                            <h1>You may have following conditions consult your doctor about this</h1>
                            <div>
                                {
                                    conditions.map((i) => {
                                        return (
                                            <div className="condition__tab">
                                                {i}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="graph__r">
                            <Graph array={array} />
                        </div>
                    </div>
                )
            }
            <ProgressBar completed={bar} width='100%' bgColor='#ff6b6b' isLabelVisible={false} className="questioning___progress" />
        </div>
    )
}


const Graph = ({ array }) => {
    console.log(array[0] + ' ' + array[1]);
    return (
        <Line
            data={{
                labels: [
                    'Depression',
                    'Anger',
                    'Mania',
                    'Anxiety',
                    'Somatic symptoms',
                    'Suicidal Ideation',
                    'Psychosis',
                    'Sleep Problems',
                    'Memory',
                    'Repetitive Thoughts and Behaviors',
                    'Dissociation',
                    'Personality Functioning',
                    'Substance Use'
                ],
                datasets: [
                    {
                        label: 'Assesment Graph',
                        data: [
                            (parseInt(array[0]) + parseInt(array[1])),
                            array[2],
                            (parseInt(array[3]) + parseInt(array[4])),
                            (parseInt(array[5]) + parseInt(array[6]) + parseInt(array[7])),
                            (parseInt(array[8]) + parseInt(array[9])),
                            array[10],
                            (parseInt(array[11]) + parseInt(array[12])),
                            array[13],
                            array[14],
                            (parseInt(array[15]) + parseInt(array[16])),
                            array[17],
                            (parseInt(array[18]) + parseInt(array[19])),
                            (parseInt(array[20]) + parseInt(array[21]) + parseInt(array[22])),
                        ],
                        fill: true,
                        backgroundColor: 'rgba(255,107,107, 0.2)',
                        borderColor: '#ff6b6b',
                        pointBackgroundColor: '#ff6b6b',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: '#ff6b6b'
                    },
                    {
                        label: 'Max Value',
                        data: [
                            8,
                            4,
                            8,
                            12,
                            8,
                            4,
                            8,
                            4,
                            4,
                            8,
                            4,
                            8,
                            12,
                        ],
                        fill: true,
                        backgroundColor: 'rgba(78,205,196, 0.2)',
                        borderColor: '#4ecdc4',
                        pointBackgroundColor: '#4ecdc4',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: '#4ecdc4'
                    }
                ]
            }}
            options={{
                maintainAspectRatio: false,
                scales: {
                    y: {
                        type: 'linear',
                        grace: '5%',
                        min: 0,
                        title: {
                            text: 'Condition Score',
                            color: '#ff6b6b',
                            display: true,
                        }
                    },
                    x: {
                        title: {
                            text: 'Conditions',
                            color: '#ff6b6b',
                            display: true,
                        }
                    },
                },
                radarOptions: {
                    scales: {
                        pointLabels: {
                            font: {
                                size: 15
                            }
                        },
                        y: {
                            beginAtZero: true,
                        }
                    }
                }
            }}
            className="radar" />
    )
}

export default SelfAssesment
