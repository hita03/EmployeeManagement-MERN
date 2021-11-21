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

export default function Home() {
    console.log("in home")
    return (
        <div className="home">
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
            <Router>
                <Topbar />

                <div div className="container">
                    <Sidebar />
                    <Switch>
                        <Route exact path="/list">
                            <List />
                        </Route>
                        <Route exact path="/add-user">
                            <Create />
                        </Route>

                    </Switch>
                </div>
            </Router>



        </div>
    )
}

