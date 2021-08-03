import React from 'react'
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { HashLink as AppLink } from 'react-router-hash-link';

function Footer() {
    return (
        <div className="footer">
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
    )
}

export default Footer
