import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import classes from './Navbar.module.css';

const Navbar = () => (
    <nav>
        <NavLink to="/" className={classes.navLink}>
            <img src={logo} alt="Rext TV Logo" width="55px" />
            <h1>
                REXTV
            </h1>
        </NavLink>

        <NavLink
            to="contact"
            className={classes.navLink}>Contact</NavLink>
    </nav>
);

export default Navbar;
