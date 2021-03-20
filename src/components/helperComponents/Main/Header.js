import React from 'react';


function Header(props) {

    return (
        <h3 className="page-header">
            {props.children}
        </h3>
    );
};

export default Header;