import React from 'react';

const converted = {
    Color: "#fff",
    hoverColor: "#fff",
    hoverBackground: "#0b5ed7",
    hoverBorderColor: "#0a58ca",
    focusShadowRGB: "49,132,253",

}

const Link = () => {
    return (
        <div>
            <a style={ converted } className="btn btn-primary" href="#" role="button">
                Вверх
            </a>
        </div>
    );
};

export default Link;