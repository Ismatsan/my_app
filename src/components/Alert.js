import React from 'react';

const style = {
    backgroundColor: "#dff0d8",
    marginRight: "980px",
    padding: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "#d6e9c6",
    color: "#3c763d",
    borderRadius: "4px",
    cursor: "pointer"
}

const Alert = (props) => {
    return (
            <div style={style} className="alert">
                <button id="btn1" className="alert-info">
                    A simple info alert—check it out!
                </button>
            </div>
    )
}

export default Alert;