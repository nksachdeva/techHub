import React from 'react';

import PageHeader from "./helperComponents/Main/PageHeader";
import Header from "./helperComponents/Main/Header";
import SubHeader from "./helperComponents/Main/SubHeader";
import TextContent from "./helperComponents/Main/TextContent";

import '../styles/main.css';

function Main(props){

    return (
        <div className="main">
            <div id="page-root">
                <PageHeader>Introduction</PageHeader>
                <Header>Heading</Header>
                <TextContent>some text here...</TextContent>
                <SubHeader>Sub Heading</SubHeader>
                <TextContent>some text here...</TextContent>
            </div>

        <br />
        
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br />
        Content End
        </div>
    );
};

export default Main;