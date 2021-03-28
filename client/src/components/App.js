import React, { useState } from 'react';

import Header from './Header';
import Footer from "./Footer";
import NavBar from './Navbar';
import Main from './Main';

import '../styles/app.css';

function App() {

    const [navBar, setNavBar] = useState({ isActive: false });
    const [navButton, setNavButton] = useState({ isActive: false });

    const onNavButtonClick = () => {
        const navBarState = !navBar.isActive;
        const navButtonState = !navButton.isActive;

        setNavBar({ isActive: navBarState });
        setNavButton({ isActive: navButtonState });


    }

    return (
        <div>
            <Header />

            <div className="layout">
                <div className="layout-left">
                    <Main />
                    <Footer />
                </div>
                <div id="navbar"

                    className={navBar.isActive ? "layout-right nav-bar-active" : "layout-right"} >
                    <NavBar />
                </div>
                <div onClick={onNavButtonClick} className="nav-button">
                    <svg height="250" width="500">
                        <polyline id="poly1"
                            className={navButton.isActive ? "active" : ""}
                            points="23,35 30,42 37,35" />
                        <polyline id="poly2" 
                            className={navButton.isActive ? "active" : ""}
                            points="23,25 30,18 37,25" />
                    </svg>

                </div>
            </div>
        </div>
    );
};


export default App;