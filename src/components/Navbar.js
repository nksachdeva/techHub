import React from 'react';

import NavbarItem from "./subComponents/NavbarItem";

import '../styles/navbar.css';

function NavBar(props) {

    return (
        <div className="navbar">
            <div className="menu">
                <NavbarItem item="Introduction" />
                <NavbarItem item="Main Concepts" />
                <NavbarItem item="Advanced Guides" />
                <NavbarItem item="API Reference" />
                <NavbarItem item="Misc" />
                <NavbarItem item="Testing" />
                {/* <div>Main Concepts</div>
                <div>Advanced Guides</div>
                <div>API Reference</div>
                <div>Hooks</div>
                <div>Testing</div> */}
            </div>
        </div>
    );
};

export default NavBar;