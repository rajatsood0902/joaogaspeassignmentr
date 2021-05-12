import React from 'react';
import '../navbar/navbar.css';
import { Link as LinkS } from 'react-scroll';

function Navbar() {
    return (
        <nav className='top-nav'>
            <h3 className='logo'>Logo</h3>
            <div className='navbtns'>
                <LinkS to='frontpage' smooth={true} duration={500} spy={true} exact='true' className='info'>ABOUT</LinkS>
                <LinkS to='meetcommunity' smooth={true} duration={500} spy={true} exact='true'  className='info'>COMMUNNITY</LinkS>
                <LinkS to='location' smooth={true} duration={500} spy={true} exact='true' className='info'>LOCATION</LinkS>
                <LinkS to='our_menu' smooth={true} duration={500} spy={true} exact='true' className='info'>OUR MENU</LinkS>
                <LinkS to='popular_recipies' smooth={true} duration={500} spy={true} exact='true' className='info'>RECEPIES</LinkS>
            </div>
            <div className="contact_log">
                <LinkS to='collaborate' smooth={true} duration={500} spy={true} exact='true' className='right-info'>CONCACT</LinkS>
                <a href='/' className='right-info'>LOGIN</a>
            </div>
        </nav>
    )
}

export default Navbar