import React from 'react';

const style ={
    width:"107px",
    height:"46.5px",
    color:"#fff",
    background:"#0d6efd",
    borderColor:"#0d6efd",
    hoverBackground:"#0b5ed7",
    hoverBorderColor:"#0a58ca",
    focusShadowRGB: "49,132,253",
    cursor:"pointer"
}

const converted = {
    Color: "#fff",
    Background: "#0d6efd",
    borderColor: "#0d6efd",
    hoverColor: "#fff",
    hoverBackground: "#0b5ed7",
    hoverBorderColor: "#0a58ca",
    focusShadowRGB: "49,132,253",
    activeColor: "#fff",
    ActiveBackground: "#0a58ca",
    ActiveBorderColor: "#0a53be",
    ActiveShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
    DisabledColor: "#fff",
    DisabledBackground: "#0d6efd",
    DisabledBorderColor: "#0d6efd"
}

const Button = () => {
    return (
        <div>
            <button style={ style } className="btn btn-primary" type="submit">
                Button
            </button>
            <a style={ converted } className="btn btn-primary" href="#" role="button">
                Link
            </a>
        </div>
    );
};

export default Button;