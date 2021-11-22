import React from 'react'
import { Link } from 'react-router-dom'

export default function Logout(props) {
    return (
        <div>
            <Link to="/login" onClick={props.onLogout} className="nav-link text-light">
                Logout <i className="fas fa-sign-out-alt"></i>
            </Link>
        </div>
    )
}
