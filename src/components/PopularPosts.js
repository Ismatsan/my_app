import React from "react";

const PopularPosts = (props) => {
    return (
            <ul className="w3-ul w3-hoverable w3-white">
                <li className="w3-padding-16">
                    <img src={props.img} alt="Image" className="w3-left w3-margin-right" style={{width: "50px"}}/>
                    <span className="w3-large">{props.title}</span>
                    <br/>
                    <span>{props.desc}</span>
                </li>
            </ul>
    );
}

export default PopularPosts;