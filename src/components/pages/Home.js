import React, { Component, useEffect } from 'react'
import WidgetLg from '../imports/WidgetLg';
import WidgetSm from '../imports/WidgetSm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from '../imports/Topbar';
import Sidebar from '../imports/Sidebar';
import List from './List';
import Create from './Create';
import "./home.css";
// import image from './Images/1.jpg'
import Header from '../imports/Header.jsx';
export default function Home() {
    return (
        <div className="home">
            <Header/>
            <div className="homeWidgets">
           
            </div >
            {/* <div className="container"> */}
                <Topbar />

                <div className="container">
                    <Sidebar />
                </div>
                {/* </div> */}
        </div>
    )
}

