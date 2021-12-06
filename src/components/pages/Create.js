import React, { Component, useEffect } from 'react'
import CreateEmployee from '../imports/CreateEmployee';
import Header from '../imports/Header.jsx';

export default function Create() {

    return (
        <>
        <Header/>
        <div id="login">
            
            <div className="container">
                <div className="row login-box">
                    <CreateEmployee/>
                </div>
            </div>
      </div>
      </>
    )
}
