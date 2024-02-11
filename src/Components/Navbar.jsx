// src/Components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Study.png';
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";

import './Styles/Navbar.css';

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <nav>
                <img src={logo} alt='logo' className='logo' />
                <button className='navbar-toggle' onClick={toggleNav}>&#9776;</button>
                <ul className={isNavOpen ? 'nav-menu open' : 'nav-menu'}>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/join' >How to join</Link>
                    </li>
                    <li>
                        <Link to='/about' >About us</Link>
                    </li>
                    <li>
                        <Link to='/report' >Report/Contact us</Link>
                    </li>
                    <SignedOut>
                        <li>
                            <Link to='/login' >
                                <div className="gradient-border-button">
                                    Login
                                </div>
                            </Link>
                        </li>
                    </SignedOut>
                    <SignedIn>
                        <li>
                            <div className="gradient-border-button2">
                                <SignOutButton />
                            </div>
                        </li>
                    </SignedIn>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
