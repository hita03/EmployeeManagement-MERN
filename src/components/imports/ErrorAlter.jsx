import React from 'react'

export default function ErrorAlter(props) {
    return (
        <div className="error-log">
            <button onClick={props.clearError}>{props.errorMessage} <i className="error"></i></button>
        </div>
    )
}
