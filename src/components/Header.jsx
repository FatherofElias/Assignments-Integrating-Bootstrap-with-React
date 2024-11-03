import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const Header = () => {
    return (
        <header>
            <h1>Marvel Comics Explorer</h1>
            <nav>
                <ul>
                    <li><NavLink to="/list" activeClassName="active">Browse Characters</NavLink></li>
                    <li><NavLink to="/comics" activeClassName="active">Comics</NavLink></li>
                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
