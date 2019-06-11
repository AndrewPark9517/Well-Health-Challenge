import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';

export default function Header(props) {
    return (
        <div className="Header">
            <div className="header-container">
                <div className="logo-container">
                    <Link to="/">
                        <img src="images/wellLogo.png" alt="logo" />
                    </Link>
                </div>
                <nav className="header-nav">
                    <ul className="nav-list">
                        <li>
                            <Link to="/">
                                <button>Andrew Park</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/appointments">
                                <button>Set Appointment</button>
                            </Link>
                        </li>
                        <li title="For Appearance Only">
                            <button>Logout</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}