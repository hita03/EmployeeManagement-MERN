import React, { Component, useEffect } from 'react'
import EditEmployee from '../imports/EditEmployee';
import Header from '../imports/Header.jsx';

export default function Update (props) {


        console.log(props.match.params.id);
        return (
            <><Header/>
            <div id="login">
                
                <div className="container">
                    <div className="row login-box">
                        <EditEmployee id = {props.match.params.id}/>
                    </div>
                </div>
          </div>
          </>
        )



}

