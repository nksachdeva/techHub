import React from 'react';

import Header from './Header';
import Footer from "./Footer";
import NavBar from './Navbar';
import Main from './Main';

import '../styles/app.css';

function App() {



    return (
        <div>
            <Header />
            <div className="layout">
                <div className="layout-left">
                    <Main />
                    <Footer />
                </div>
                <div className="layout-right">
                    <NavBar />
                </div>
            </div>
        </div>
    );
};


export default App;