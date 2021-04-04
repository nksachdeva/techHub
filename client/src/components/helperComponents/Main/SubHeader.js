import React from 'react';


function SubHeader(props) {

    return (
        <h4 className="page-sub-header">
            {props.children}
        </h4>
    );
};

export default SubHeader;