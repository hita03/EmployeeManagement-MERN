import React from 'react'

import { Link } from 'react-router-dom';
import Logout from './Logout';

import { logoutAction } from '../../container/actions';
import { useDispatch } from 'react-redux';

export default function Header() {

    const dispatch = useDispatch()

    const logout  = () => {
        dispatch(logoutAction());
    }
    var titleProp = {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    };
    var logoutProp = {
        fontSize: '18px'
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light primary-gradient shadow">
                <Link style={titleProp} className="nav-link brand mx-auto" to="/">
                    <h2 className="text-light m-0" >Employee Management</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="me-auto"></div>
                    <ul className="navbar-nav">
                        <li style ={logoutProp} className="nav-item active">
                            <Logout onLogout={logout}></Logout>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
