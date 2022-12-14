import React from 'react';

const PopularPostElem = (props) => {
    return (
        <li className="w3-padding-16">
            <img
                src={props.img}
                alt="Image"
                className="w3-left w3-margin-right"
                style={{width: "50px"}}
            />
            <span className="w3-large">{props.title}</span>
            <br/>
            <span>{props.desc}</span>
        </li>
    );
}

export default PopularPostElem;