import React, { useState } from 'react';
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";

import Header from './Header';
import Footer from "./Footer";
import NavBar from './Navbar';
import Main from './Main';
import ArticleCreate from "./articles/articleCreate";
import ArticleShow from "./articles/articleShow";

// import '../styles/app.css';

function App() {

    




    return (
        <div>
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/article/new">
                        <ArticleCreate />
                    </Route>
                    <Route exact path="/">
                        <ArticleShow />
                    </Route>
                </Switch>
            </BrowserRouter>

        </div>
    );
};


export default App;