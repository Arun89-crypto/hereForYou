import React, { useState } from 'react'
import Menu from '../assets/menu.svg';
import Close from '../assets/close.png';
import Logo from '../assets/logo.svg';
import { HashLink as AppLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import Help from '../assets/Help.svg';
import Meditation from '../assets/meditation.svg';
import Footer from './Footer';
import GoToTop from './GoToTop';


function SelfHelp() {
    const [nav, setNav] = useState(false);
    return (
        <div className="self__help__section">
            <div id="hexagon">
                <img src={(nav) ? Close : Menu} alt='' onClick={() => setNav(!nav)}></img>
            </div>
            {
                (nav) ? (
                    <Navbar setNav={setNav} />
                ) : ''
            }
            <div className="self__help__main flex__spacebetween" id='selfpage'>
                <div>
                    <h1>Self Help</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus. Morbi in pulvinar mi. Vestibulum hendrerit nisi nulla, vel malesuada ligula porttitor quis.</p>
                </div>
                <img src={Help} alt=''></img>
            </div>
            <MusicSection />
            <MeditateSection />
            <Ebooks />
            <Footer />
            <GoToTop />
        </div>
    )
}

const Navbar = ({ setNav }) => {
    return (
        <div className="navbar">
            <img src={Logo} alt=''></img>
            <div>
                <Link to='/' style={{ textDecoration: 'none' }} className='nav__link'>
                    Home
                    <div className='underline'></div>
                </Link>
                <AppLink
                    smooth
                    to="/selfhelp/#music"
                    style={{ textDecoration: 'none' }} className='nav__link'
                    onClick={() => setNav(false)}
                >
                    Music
                    <div className='underline'></div>
                </AppLink>

                <AppLink
                    smooth
                    to="/selfhelp/#medit"
                    style={{ textDecoration: 'none' }} className='nav__link'
                    onClick={() => setNav(false)}
                >
                    Meditation
                    <div className='underline'></div>
                </AppLink>
                <AppLink
                    smooth
                    to='/selfhelp/#ebooks'
                    style={{ textDecoration: 'none' }} className='nav__link'
                    onClick={() => setNav(false)}
                >
                    E-Books
                    <div className='underline'></div>
                </AppLink>
                <Link to='/about' style={{ textDecoration: 'none' }} className='nav__link'>
                    About
                    <div className='underline'></div>
                </Link>
                <Link to='/events' style={{ textDecoration: 'none' }} className='nav__link'>
                    Events
                    <div className='underline'></div>
                </Link>
            </div>
        </div>
    );
}
const MusicSection = () => {
    return (
        <>
            <div className="music">
                <h1 id='music'>Take a break</h1>
                <div className="music__section">
                    <iframe width="250" height="250" src="https://www.youtube.com/embed/f02mOEt11OQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="youtube__frame"></iframe>
                    <iframe width="250" height="250" src="https://www.youtube.com/embed/7NOSDKb0HlU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="youtube__frame"></iframe>
                    <iframe width="250" height="250" src="https://www.youtube.com/embed/vDYP6AKw8bk?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="youtube__frame"></iframe>
                    <iframe width="250" height="250" src="https://www.youtube.com/embed/2OEL4P1Rz04?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="youtube__frame"></iframe>
                    <iframe width="250" height="250" src="https://www.youtube.com/embed/PszSx4HvKAA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="youtube__frame"></iframe>
                    <iframe width="250" height="250" src="https://www.youtube.com/embed/a8MJd91eE9Y?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="youtube__frame"></iframe>
                </div>
            </div>
            <button className="spotifiy-button">
                <p>Check out our spotify playlist</p>
                <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' alt=''></img>
            </button>
        </>
    )
}
const MeditateSection = () => {
    return (
        <div className="meditate__section" id='medit'>
            <h1>Meditate</h1>
            <div className="flex__spacebetween">
                <img src={Meditation} alt=''></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus. Morbi in pulvinar mi. Vestibulum hendrerit nisi nulla, vel malesuada ligula porttitor quis. Suspendisse id lectus volutpat, dictum ligula v.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus. Morbi in pulvinar mi. Vestibulum hendrerit nisi nulla, vel malesuada ligula porttitor quis. Suspendisse id lectus volutpat, dictum ligula v.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus. Morbi in pulvinar mi. Vestibulum hendrerit nisi nulla, vel malesuada ligula porttitor quis. Suspendisse id lectus volutpat, dictum ligula</p>
            </div>
            <div className="resources">
                {/* resources to be added here  */}
            </div>
        </div>
    )
}
const Ebooks = () => {
    return (
        <div className="ebooks__section" id='ebooks'>
            <h1>E-books</h1>
            <div>
                <img src='https://media.self.com/photos/5ecfead2c03ef7b8f8812f84/3:4/w_708,h_944,c_limit/product-roundup_mentalhealthbooks.jpg' alt='' className="book"></img>
                <img src='https://media.self.com/photos/5ecfead2c03ef7b8f8812f84/3:4/w_708,h_944,c_limit/product-roundup_mentalhealthbooks.jpg' alt='' className="book"></img>
                <img src='https://media.self.com/photos/5ecfead2c03ef7b8f8812f84/3:4/w_708,h_944,c_limit/product-roundup_mentalhealthbooks.jpg' alt='' className="book"></img>
                <img src='https://media.self.com/photos/5ecfead2c03ef7b8f8812f84/3:4/w_708,h_944,c_limit/product-roundup_mentalhealthbooks.jpg' alt='' className="book"></img>
                <img src='https://media.self.com/photos/5ecfead2c03ef7b8f8812f84/3:4/w_708,h_944,c_limit/product-roundup_mentalhealthbooks.jpg' alt='' className="book"></img>
            </div>
        </div>
    )
}
export default SelfHelp
