import React, { useState } from 'react'
import MainSvg from '../../assets/undraw_mindfulness_scgo.svg';
import Menu from '../../assets/menu.svg';
import Close from '../../assets/close.png';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import TeamPic from '../../assets/tem.svg';
import { HashLink as AppLink } from 'react-router-hash-link';
import Question from './Questions/Question';
import PlanCard from '../PlanCard';
import Footer from '../Footer/Footer';
import GoToTop from '../GoToTop';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import SelfAssesment from '../SelfAssessment/SelfAssesment';

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
const Catags = [
    {
        id: '1',
        name: 'ANXIETY'
    },
    {
        id: '2',
        name: 'DEPRESSION'
    },
    {
        id: '3',
        name: 'CRITICAL ILLNESS AND TERMINAL ILLNESS'
    },
    {
        id: '4',
        name: 'LOSS, BEREAVEMENT, AND GRIEF'
    },
    {
        id: '5',
        name: 'RELATIONSHIP DIFFICULTIES'
    },
    {
        id: '6',
        name: 'INFIDELITY'
    },
    {
        id: '7',
        name: 'HEALTHY SELF-IMAGE / BODY-IMAGE'
    },
    {
        id: '8',
        name: 'PSYCHOLOGICAL IMPACTS OF IMMIGRATION AND READJUSTMENT'
    },
    {
        id: '9',
        name: 'CHILD-PARENT CONFLICT'
    },
    {
        id: '10',
        name: 'ISSUES OF ACCULTURATION'
    },
    {
        id: '11',
        name: 'WORKPLACE STRESS/BURNOUT AND CAREER EXPOLARTIONS'
    },
    {
        id: '12',
        name: 'TRAUMA INCLUDING NEGLECT, SEXUAL, PHYSICAL, EMOTIONAL ABUSE'
    },
    {
        id: '13',
        name: 'COUPLES COUNSELLING'
    },
    {
        id: '14',
        name: 'ADHD (18 YEARS OR OLD)'
    },
    {
        id: '15',
        name: 'BORDERLINE PERSONALITY DISORDER (BPD)'
    },
    {
        id: '16',
        name: 'AGING WITH GRACE AND DEALING WITH FRAILTY'
    },
    {
        id: '17',
        name: 'CANCER'
    },
    {
        id: '18',
        name: 'LGBTQ ISSUES AND EXPLORATIONS IN SEXUALITY'
    },
    {
        id: '19',
        name: 'COMPANION ANIMAL/PET LOSS AND GRIEF'
    },
    {
        id: '20',
        name: 'BEHAVIOUR PATTERNS & NEGATIVE THOUGHT PATTERNS'
    },
]
const Questions = [
    {
        id: '1',
        question: 'What should I take Therapy or Counselling?',
        answer: 'Counselling is an unstructured & non directive way of putting the facts in front of someone to enable them to take a decision which is least harmful for them & others. It aims to develop a safe relationship, within which an individual can explore personal difficulties and develop deeper understanding of themselves.Therapy better known as Psychotherapy is a scientific, evidence based interactive process(sitting on a couch is optional) which brings a change in the individual which is beneficial to them.Ideally, Therapy should be administered by Trained professionals(Psychiatrists & Clinical Psychologists), since a wrong technique may have adverse outcomes(just like side effects from a medicine you buy from that shady guy who calls him self a doctor, around the corner).'
    },
    {
        id: '2',
        question: 'Why should I pay? Is it not like paying a friend to listen to you rant?',
        answer: 'Well, unfortunately it doesn’t work like how you see on Netflix, we do more than just talking. we talk more than just about your Daddy issues. The Mental Health Professionals we have on board, have undergone rigorous training, spent countless nights studying (well most nights), just to help you with your issues. Whereas, all a friend will do is take your money(score some J, get you high on Dutch courage) give you some gyaan (advice which may or may not work).'
    },
    {
        id: '3',
        question: 'Is my information safe? Can I trust the person I am consulting?',
        answer: 'Well, Consultations here at HFY are like Vegas, it’s a safe space where what happens here, stays here. Building a good & honest therapeutic relationship is the only way you will benefit of these consultations (please, tell us everything honestly even if you like pineapple on your Pizza, DON’T WORRY WE DON’T JUDGE, some of us here at HFY would gladly eat it and that too with Ketchup).'
    },
    {
        id: '4',
        question: 'My friend said, don’t go to a Psychiatrist, their Medications are addictive, is that true?',
        answer: 'This urban myth is as old as Shaktiman (or maybe older). Medicines if taken as prescribed by a Psychiatrist (No cheating here, no refilling your old prescription from that friendly bespectacled pharmacy uncle or taking a medicine from that know-it-all aunty whose uncle’s son was prescribed the same medication for Anxiety) will not cause dependence. On an average, a psychiatrist spends 10 years in Medical School to help people with addictions recover. However, some medications are prescribed for a long time, sometimes a lifetime of course, but do you call every other old person on a medicine to control their Blood Pressure, addicted to those medicines (our pills work the same way, different Pharmacology of course, If you’re interested to learn about that check our Courses for you Section.)'
    },
    {
        id: '5',
        question: 'If I’m taking a consultation does that make me weak? ',
        answer: 'Being Healthy in general is a utopian concept, doesn’t exist in real life (if we go by the Standard Definition of Health and not mere absence of disease.) Similarly, on this journey of life, our body which is our vehicle sometimes breaks down (akin to having a physical or mental health problem) in these cases you can fix the vehicle yourself or ask for professional help (If calling a mechanic to fix your car makes you weak; well maybe it’s time to re-define strength).'
    }
]
function HomePage() {
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [nav, setNav] = useState(false);
    const [assesment, setAssesment] = useState(false);
    return (
        <div className="App">
            <MainPage setSignIn={setSignIn} setSingUp={setSignUp} />
            <WhyUs />
            <SelfHelp setAssesment={setAssesment} />
            <BlogPage />
            <div className="counter__section flex__center">
                <div className="flex__center">
                    <h1>Lives Enriched</h1>
                    <h2>302</h2>
                </div>
                <div className="flex__center">
                    <h1>Therapy Hours</h1>
                    <h2>1526</h2>
                </div>
            </div>
            <FaqComponent />
            <PlansSection />
            <Collaborators />
            <Footer />
            {
                (assesment) ? (<SelfAssesment setAssesment={setAssesment} />) : ''
            }
            <GoToTop />
            <div id="hexagon">
                <img src={(nav) ? Close : Menu} alt='' onClick={
                    () => {
                        setNav(!nav);
                    }
                }></img>
            </div>
            <Link to='/dashboard'>
                <div className="account__header flex__spacebetween">
                    <div className="acc__pic">
                    </div>
                    <p>Dashboard</p>
                </div>
            </Link>
            {
                (signIn) ? (
                    <SignIn setSignIn={setSignIn} />
                ) : ''
            }
            {
                (signUp) ? (
                    <SignUp setSignUp={setSignUp} />
                ) : ''
            }
            {
                (nav) ? (
                    <div className="navbar">
                        <img src={Logo} alt=''></img>
                        <div>
                            <AppLink
                                smooth
                                to="/#whyus"
                                style={{ textDecoration: 'none' }} className='nav__link'
                                onClick={() => setNav(false)}
                            >
                                Why Us ?
                                <div className='underline'></div>
                            </AppLink>
                            <Link to='/blogpage' style={{ textDecoration: 'none' }} className='nav__link'>
                                Blogs
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
                            <Link to='/events' style={{ textDecoration: 'none' }} className='nav__link'>
                                Events
                                <div className='underline'></div>
                            </Link>
                            <AppLink
                                smooth
                                to="/#faqs"
                                style={{ textDecoration: 'none' }} className='nav__link'
                                onClick={() => setNav(false)}
                            >
                                FAQ's
                                <div className='underline'></div>
                            </AppLink>
                            <AppLink
                                smooth
                                to='/#plans'
                                style={{ textDecoration: 'none' }} className='nav__link'
                                onClick={() => setNav(false)}
                            >
                                Plans
                                <div className='underline'></div>
                            </AppLink>
                        </div>
                    </div>
                ) : ''
            }
        </div>
    );
}


const Collaborators = () => {
    return (
        <div className="collaborators">
            <h1>Collaborators</h1>
            <div className="collaborator__grid"></div>
        </div>
    )
}

const MainPage = ({ setSignIn, setSingUp }) => {
    return (
        <div className="main__page flex__center">
            <div className="main__left__section">
                <h1>
                    Here For You
                </h1>
                <div className="main__button__section">
                    <button className='button__signin' onClick={() => setSignIn(true)}>Sign In</button>
                    <button className='button__signout' onClick={() => setSingUp(true)}>Sign Up</button>
                </div>
            </div>
            <div className="main__right__section">
                <img src={MainSvg} alt=""></img>
            </div>
        </div>
    )
}

const WhyUs = () => {
    return (
        <div className='why__us__page flex__center' id='whyus'>
            <div className='upper__why__page flex__center'>
                <div className='left__upper__why'>
                    <img src={TeamPic} alt=''></img>
                </div>
                <div className='right__upper__why'>
                    <h1>Why Us ??</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim mauris quam, quis bibendum lorem venenatis eu. Fusce in luctus orci. Nam ut odio in enim placerat pellentesque a a lacus. Vivamus metus nunc, euismod ut urna nec, egestas pharetra nisi. Morbi hendrerit ultrices convallis. In hac habitasse platea dictumst. Duis sit amet faucibus nisl. Duis et tellus nec nulla laoreet consequat a hendrerit nulla. Vestibulum gravida mollis velit, non volutpat sem ultricies vitae. Donec congue laoreet risus at scelerisque. Pellentesque in ultricies mi, ut aliquam dolor.</p>
                </div>
            </div>
            <div className='lower__why__page'>
                <h1>What we deal in</h1>
                <div className="deal__catags">
                    {
                        Catags.map((item) => {
                            const { id, name } = item;
                            return (
                                <div key={id} className="dealin__card">
                                    <h3>{name}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const SelfHelp = ({ setAssesment }) => {
    return (
        <div className="self__help__page" id='selfhelp'>
            <h1>Self Help</h1>
            <div>
                <Link to='/selfhelp'>
                    <button>Go to self help</button>
                </Link>
                <button onClick={() => setAssesment(true)}>Take a self Assesment</button>
            </div>
        </div>
    )
}
const BlogPage = () => {
    return (
        <div className="self__help__page rev">
            <h1>Blog Page</h1>
            <Link to='/blogpage'>
                <button>Go to blog page</button>
            </Link>
        </div>
    )
}

const FaqComponent = () => {
    return (
        <div className='faq__main' id='faqs'>
            <h1>FAQ's</h1>
            <div className="faq__sections">
                {
                    Questions.map((q) => {
                        const { id, question, answer } = q;
                        return (
                            <Question id={id} question={question} answer={answer} />
                        )
                    })
                }
            </div>
        </div>
    )
}

const PlansSection = () => {
    return (
        <div className="plans__section" id='plans'>
            <h1>Our Plans</h1>
            <div className="plan__cards__cont flex__center">
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
    )
}

export default HomePage;
