import React, { Component, useEffect } from 'react'
import WidgetLg from '../imports/WidgetLg';
import WidgetSm from '../imports/WidgetSm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from '../imports/Topbar';
import Sidebar from '../imports/Sidebar';
import List from './List';
import Create from './Create';
import "./home.css";
import Header from '../imports/Header.jsx';
export default function Home() {
    return (
        <div className="home">
            <Header />
            <div className="homeWidgets">

            </div >
            <Topbar />

            <div className="container">
                <Sidebar />
            </div>
        </div>
    )
}

