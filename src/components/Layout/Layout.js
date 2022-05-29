import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Navbar/Navbar';
import classes from './Layout.module.css';

export default function Layout () {
    return (
        <div className={classes.wrapper}>
            <NavBar />
            <main className={classes.mainWrapper}>
                <Outlet />
            </main>
        </div>

    );
}
