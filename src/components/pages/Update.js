import React, { Component, useEffect } from 'react'
import EditEmployee from '../imports/EditEmployee';

export default function Update (props) {


        console.log(props.match.params.id);
        return (
            <div id="login">
                <div className="container">
                    <div className="row login-box">
                        <EditEmployee id = {props.match.params.id}/>
                    </div>
                </div>
          </div>
        )



}

