import React from 'react';
import Logo from './../assets/logo.jpg'; 
import SearchIcon from './../assets/search.jpg'
import HomeFillIcon from './../assets/homefill.png'; 
import HeartNoFillIcon from './../assets/heart-icon-jst.png'
import UserProfileIcon from './../assets/profile.png'

import'./Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={Logo} className="logo" alt="Logo" />
            <form className="search-box">
                <input type="text" placeholder="search" name="search-query" id="search-input" />
                <button className="search-btn" type="submit">
                    <img src={SearchIcon} className="search-icon" alt="Search" />
                </button>
            </form>
            <div className="nav-links">
                <a href="#" className="nav-link">
                    <img src={HomeFillIcon} className="nav-icon" alt="Home" />
                </a>
                <div className="activity-log">
                    <img src={HeartNoFillIcon} className="nav-icon" alt="Activity" />
                  </div>
                <a href="#" className="nav-link">
                    <img src={UserProfileIcon} className="nav-icon user-profile" alt="User Profile" />
                </a>
            </div>
        </div>
    );
}

export default Navbar;
