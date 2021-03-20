import React from 'react';

function PageHeader(props) {

    return (
        <h2 className="page-title">
            {props.children}
        </h2>
    );
};

export default PageHeader;