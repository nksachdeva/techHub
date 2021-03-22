import React, { useEffect, useState } from 'react';

import '../../styles/navbar.css';

function NavbarItem(props) {


    return (
        <div>
            {/* <div className="menu-item">
                <div onClick={e => onMenuItemClick(e, props.item.id)}>{props.item.name}</div>
                <div className="drop-sign"></div>
            </div> */}
            {/* <button onClick={e => onMenuItemClick(e, props.item.id)} className="menu-item">
                <div >{props.item.name}</div>
                <div className="drop-sign"></div>
            </button> */}

            <label
                onClick={() => props.onChangeHandler(props.item.id)}
                htmlFor={`radioItem${props.item.id}`}
                className={(props.selectedOption === props.item.id) ? "menu-item active" : "menu-item"}
            >
                <div
                    className={(props.selectedOption === props.item.id) ? "active" : ""}
                >{props.item.name}</div>
                <div
                    className={(props.selectedOption === props.item.id) ? "active drop-sign" : "drop-sign"}
                ></div>
            </label>
            <input type="radio"
                checked={props.selectedOption === props.item.id}
                // onChange={()=>props.onChangeHandler(props.item.id)}
                readOnly={true}
                name="menuradios"
                id={`radioItem${props.item.id}`} />
            <div id={`panel${props.item.id}`} className="panel">
                <ul>
                    {
                        Object.values(props.item.submenu).map((listItem, index) => {
                            return <li key={index}>{listItem}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default NavbarItem;