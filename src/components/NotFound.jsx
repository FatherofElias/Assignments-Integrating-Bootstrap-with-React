import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <NavLink to="/">Go back to Home</NavLink>
        </div>
    );
};

export default NotFound;
