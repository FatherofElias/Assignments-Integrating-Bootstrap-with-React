import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the Marvel Comics Explorer!</p>
            <nav>
                <ul>
                    <li><NavLink to="/character" activeClassName="active">Browse Characters</NavLink></li>
                    <li><NavLink to="/comics" activeClassName="active">Comics</NavLink></li>
                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;