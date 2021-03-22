import React, { useEffect, useState } from 'react';

import NavbarItem from "./subComponents/NavbarItem";
import { getMenuItems } from "../api/content";

import '../styles/navbar.css';

function NavBar(props) {

    const [menuitems, setMenuItems] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState(-1);

    useEffect(() => {
        console.log('mounted');

        fetchMenu();

        return () => console.log('unmounting....');
    }, []);

    const onChangeHandler = (id) => {
        
        if (selectedMenu === id) {
            setSelectedMenu(-1);
        } else {

            setSelectedMenu(id);
        }

    };

    const fetchMenu = () => {
        setMenuItems(getMenuItems());
    };

    return (
        <div className="navbar">
            <div className="menu">
                {
                    menuitems.map(item => {
                        return <NavbarItem
                            key={item.id}
                            selectedOption={selectedMenu}
                            onChangeHandler={onChangeHandler}
                            item={item} />
                    })
                }
            </div>
        </div>
    );
};

export default NavBar;