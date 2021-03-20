import React from 'react';

import '../../styles/navbar.css';

function NavbarItem(props) {

    return (
        <div className="menu-item">
            <div>{props.item}</div>
            <div className="drop-sign"></div>
        </div>
    );
};

export default NavbarItem;