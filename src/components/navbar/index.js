import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
return (
	<div style={{
        backgroundColor: 'white'
    }}>
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to="/about">
            About Us
        </NavLink>
    </div> 
);
};

export default Navbar;
