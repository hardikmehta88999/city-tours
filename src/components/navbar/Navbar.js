import React, { Fragment } from 'react'
import logo from '../../logo.svg';
import './Navbar.scss'

const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar">
            <img src={logo} alt="city-tours" />
            <ul className="nav-links">
            <li>
                <a href="/" className="nav-link">Home</a>
            </li>
            <li>
                <a href="/" className="nav-link active">Tours</a>
                </li>
            <li>
                <a href="/" className="nav-link">Contact</a>
                </li>
            </ul>
            </nav>
        </Fragment>
    )
}

export default Navbar
