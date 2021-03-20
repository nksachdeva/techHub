import React from 'react';


function TextContent(props) {

    return (
        <p className="page-text">
            {props.children}
        </p>
    );
};

export default TextContent;