import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'

//penamaan import ikuti peraturan tsx
import navbar_logo from '../navbar/assets/navbar-logo.png';

const Navbar = () => {
return (
	<div className='navbar-container'>
        <div className='navbar-logo'>
            {/* panggil import */}
            <img src={navbar_logo} alt=''></img>
        </div>
        <div className='navbar-menu'>
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
        <div className='navbar-logo'>
            {/* panggil import navbar logo */}
            <img src={navbar_logo} alt='' style={{
                display: 'none'
            }}>

            </img>
        </div>
    </div>
        
);
};

export default Navbar;
