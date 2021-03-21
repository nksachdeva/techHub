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
                        return <NavbarItem key={item.id} item={item} />
                    })
                }
            </div>
        </div>
    );
};

export default NavBar;