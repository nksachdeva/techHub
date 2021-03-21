import React from 'react';

import '../../styles/navbar.css';

function NavbarItem(props) {

    const onMenuItemClick = (e, key) => {
        console.log(key);
        e.target.classList.toggle('active');
        e.target.nextElementSibling.classList.toggle("active");
        console.log(e.target)
        const panel = document.getElementById(`panel${key}`);
        console.log(panel)
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }

    return (
        <div>
            <div className="menu-item">
                <div onClick={e => onMenuItemClick(e, props.item.id)}>{props.item.name}</div>
                <div className="drop-sign"></div>
            </div>
            <div id={`panel${props.item.id}`} className="panel">
                <ul>
                    {
                        Object.values(props.item.submenu).map(listItem=>{
                            return <li>{listItem}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default NavbarItem;