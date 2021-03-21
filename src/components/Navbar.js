import React, { useEffect, useState } from 'react';

import NavbarItem from "./subComponents/NavbarItem";
import { getMenuItems } from "../api/content";

import '../styles/navbar.css';

function NavBar(props) {

    const [menuitems, setMenuItems] = useState([]);

    useEffect(() => {
        console.log('mounted');

        fetchMenu();

        return () => console.log('unmounting....');
    }, []);

    const fetchMenu = () => {
        setMenuItems(getMenuItems());
    };

    return (
        <div className="navbar">
            <div className="menu">
                {
                    menuitems.map(item => {
                        return <NavbarItem item={item} />
                    })
                }

                {/* <NavbarItem id="1" item="Introduction" /> */}
                {/* <NavbarItem id={Object.keys(menuitems)[0]} item={menuitems[1].name} /> */}
                {/* <NavbarItem id="2" item="Main Concepts" />
                <NavbarItem id="3" item="Advanced Guides" />
                <NavbarItem id="4" item="API Reference" />
                <NavbarItem id="5" item="Misc" />
                <NavbarItem id="6" item="Testing" /> */}
            </div>
        </div>
    );
};

export default NavBar;