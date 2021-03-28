import React, { useState } from 'react';


import logo from '../images/myLogoCropped.png';
import gitLogo from '../images/gitIcon.png';
import "../styles/header.css";

function Header(props) {

    const [searchBarStyle, setSearchBarStyle] = useState({ display: "flex" });
    const [searchInputStyle, setSearchInputStyle] = useState({ border: "none", backgroundColor: "#17202A", color:"white" });

    const searchOnFocus = () => {
        console.log('event triggered');
        setSearchBarStyle({ ...searchBarStyle, backgroundColor: "#566573" });
        setSearchInputStyle({...searchInputStyle,backgroundColor:"#566573"});
        // let searchBar = document.getElementsByClassName("search-bar");
        // console.log(searchBar);
        // searchBar.style.background = "yellow";
    }

    const searchOnBlur = () => {
        console.log('blur event triggered');
        setSearchBarStyle({ ...searchBarStyle, backgroundColor: "#17202A" });
        setSearchInputStyle({...searchInputStyle,backgroundColor:"#17202A"});
    }

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
            {/* <div style={{ display: "flex" }} className="search-bar"> */}
            <div style={searchBarStyle} className="search-bar">
                <i className="material-icons">search</i>
                <input type="text"
                    style={searchInputStyle}
                    onFocus={searchOnFocus}
                    onBlur={searchOnBlur}
                    placeholder="Search" id="search" />
            </div>
            <div className="git-logo">
                <a target="_" href="https://github.com/nksachdeva/techHub/tree/master">
                    <img id="git-icon" src={gitLogo} alt="git logo" />
                </a>
            </div>
        </div>
    );
};

export default Header;