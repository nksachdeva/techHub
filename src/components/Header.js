import React from 'react';


import logo from '../images/myLogoCropped.png';
import "../styles/header.css";

function Header(props) {

    return (
        <div className="header">
            <div className="logo">
                <img id="logo-image" alt="logo" src={logo} />
                <div id="logo-text">TechHub</div>
            </div>
            <div className="menu-items">
                <div className="item" id="topics">Topics</div>
                <div className="item" id="articles">Articles</div>
                <div className="item" id="help">Help</div>
            </div>
            <div className="search-bar">
                <input type="text" id="search" />
            </div>
        </div>
    );
};

export default Header;