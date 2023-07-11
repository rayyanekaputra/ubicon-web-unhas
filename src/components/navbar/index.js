import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'
const Navbar = () => {
return (
	<div className='navbar-container'>
        <NavLink to="/">
            Home
        </NavLink>
        {/* TODO: buatkan pagenya dan router di App.js */}
        <NavLink to="/blog">
            Blog
        </NavLink>
        <NavLink to="/about">
            About Us
        </NavLink>
    </div> 
);
};

export default Navbar;
