import React, { useState, useEffect } from 'react';

import PageHeader from "./helperComponents/Main/PageHeader";
import Header from "./helperComponents/Main/Header";
// import SubHeader from "./helperComponents/Main/SubHeader";
import TextContent from "./helperComponents/Main/TextContent";

import { getMainContent } from "../api/mainContent";

import '../styles/main.css';


function Main(props) {

    const [content, setContent] = useState([]);

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = () => {
        setContent(getMainContent());
        // console.log(content)
    };

    const renderContent = () => {
        return content.map(item => {
            return <React.Fragment key={item.id}>
                <Header>{item.title}</Header>
                <TextContent>{item.text}</TextContent>
            </React.Fragment>

        })

    };

    if (content.length > 0) {

        return (
            <div className="main">
                <div id="page-root">
                    <PageHeader>C#</PageHeader>

                    <Header>{content[0].title}</Header>
                    <TextContent>{content[0].text}</TextContent>

                    {renderContent()}
                    {/* <SubHeader>Sub Heading</SubHeader>
                    <TextContent>some text here...</TextContent> */}
                </div>
            </div>
        );
    } else {
        return <div>Loading....</div>
    }
};

export default Main;