import React, { useState, useEffect } from 'react'
import MainSvg from '../assets/undraw_mindfulness_scgo.svg';
import Menu from '../assets/menu.svg';
import Close from '../assets/close.png';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import TeamPic from '../assets/tem.svg';
import { HashLink as AppLink } from 'react-router-hash-link';
import Question from './Question';
import PlanCard from './PlanCard';
import Footer from './Footer';
import GoToTop from './GoToTop';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SelfAssesment from './SelfAssesment';
import { commerce } from '../lib/Commerce';



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
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus ?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus. Morbi in pulvinar mi. Vestibulum hendrerit nisi nulla, vel malesuada ligula porttitor quis. Suspendisse id lectus volutpat, dictum ligula v.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus. Morbi in pulvinar mi. Vestibulum hendrerit nisi nulla, vel malesuada ligula porttitor quis. Suspendisse id lectus volutpat, dictum ligula v.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus. Morbi in pulvinar mi. Vestibulum hendrerit nisi nulla, vel malesuada ligula porttitor quis. Suspendisse id lectus volutpat, dictum ligula'
    },
    {
        id: '2',
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus ?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus. Morbi in pulvinar mi. Vestibulum hendrerit nisi nulla, vel malesuada ligula porttitor quis. Suspendisse id lectus volutpat, dictum ligula v.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus. Morbi in pulvinar mi. Vestibulum hendrerit nisi nulla, vel malesuada ligula porttitor quis. Suspendisse id lectus volutpat, dictum ligula v.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus. Morbi in pulvinar mi. Vestibulum hendrerit nisi nulla, vel malesuada ligula porttitor quis. Suspendisse id lectus volutpat, dictum ligula'
    },
    {
        id: '3',
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus ?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus. Morbi in pulvinar mi. Vestibulum hendrerit nisi nulla, vel malesuada ligula porttitor quis. Suspendisse id lectus volutpat, dictum ligula v.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus. Morbi in pulvinar mi. Vestibulum hendrerit nisi nulla, vel malesuada ligula porttitor quis. Suspendisse id lectus volutpat, dictum ligula v.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus. Morbi in pulvinar mi. Vestibulum hendrerit nisi nulla, vel malesuada ligula porttitor quis. Suspendisse id lectus volutpat, dictum ligula'
    },
    {
        id: '4',
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus ?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus. Morbi in pulvinar mi. Vestibulum hendrerit nisi nulla, vel malesuada ligula porttitor quis. Suspendisse id lectus volutpat, dictum ligula v.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus. Morbi in pulvinar mi. Vestibulum hendrerit nisi nulla, vel malesuada ligula porttitor quis. Suspendisse id lectus volutpat, dictum ligula v.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus. Morbi in pulvinar mi. Vestibulum hendrerit nisi nulla, vel malesuada ligula porttitor quis. Suspendisse id lectus volutpat, dictum ligula'
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
            <FaqComponent />
            <PlansSection />
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
        <div className="plans__section" id='plans'>
            <h1>Our Plans</h1>
            <div className="plan__cards__cont flex__center">
                {
                    products.map((item) => {
                        return (
                            <PlanCard id={item.id} name={item.name} price={item.price.formatted_with_symbol} desc={item.description}></PlanCard>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomePage;
