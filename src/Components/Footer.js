import React from 'react'
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { HashLink as AppLink } from 'react-router-hash-link';
import Insta from '../assets/links/instagram.svg';
import Twitter from '../assets/links/twitter.png';
import LinkedIn from '../assets/links/linked.svg';
import Facebook from '../assets/links/facebook.png';


function Footer() {
    return (
        <div className="footer">
            <div>
                <div className="left__footer">
                    <img src={Logo} alt=''></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a quam iaculis, sagittis nunc id, feugiat purus</p>
                </div>
                <div className="right__footer">
                    <AppLink
                        smooth
                        to="/#whyus"
                        style={{ textDecoration: 'none' }} className='nav__link'>
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
                        style={{ textDecoration: 'none' }} className='nav__link'>
                        FAQ's
                        <div className='underline'></div>
                    </AppLink>
                    <AppLink
                        smooth
                        to='/#plans'
                        style={{ textDecoration: 'none' }} className='nav__link'>
                        Plans
                        <div className='underline'></div>
                    </AppLink>
                    <AppLink
                        smooth
                        to='/selfhelp/#ebooks'
                        style={{ textDecoration: 'none' }} className='nav__link'>
                        E-Books
                        <div className='underline'></div>
                    </AppLink>
                    <AppLink
                        smooth
                        to='/selfhelp/#medit'
                        style={{ textDecoration: 'none' }} className='nav__link'>
                        Meditation
                        <div className='underline'></div>
                    </AppLink>
                    <AppLink
                        smooth
                        to="/selfhelp/#music"
                        style={{ textDecoration: 'none' }} className='nav__link'>
                        Music
                        <div className='underline'></div>
                    </AppLink>
                    <AppLink
                        smooth
                        to='/#selfhelp'
                        style={{ textDecoration: 'none' }} className='nav__link'>
                        Self Assesment
                        <div className='underline'></div>
                    </AppLink>
                </div>
            </div>
            <div className="social__links flex__center">
                <a href='https://www.instagram.com/hereforyou.io/' target='_blank' rel="noreferrer">
                    <img src={Insta} alt=''></img>
                </a>
                <a href='https://twitter.com/hereforyou_io' target='_blank' rel="noreferrer">
                    <img src={Twitter} alt=''></img>
                </a>
                <a href='#'>
                    <img src={Facebook} alt=''></img>
                </a>
                <a href='https://www.linkedin.com/company/here-for-you-in/' target='_blank' rel="noreferrer">
                    <img src={LinkedIn} alt=''></img>
                </a>
            </div>
            <div className="conditions flex__center">
                <Link to='/termsandconditionshfu' style={{ textDecoration: 'none' }} className='nav__link'>
                    Terms and Conditions
                </Link>
                <Link to='/policypage' style={{ textDecoration: 'none' }} className='nav__link'>
                    Privacy Policy
                </Link>
            </div>
        </div>
    )
}

export default Footer
