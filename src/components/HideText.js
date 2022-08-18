import React, { useState } from 'react';

const style = {
    backgroundColor: "#cff4fc",
    borderColor: "#b6effb",
    padding: "5px",
    display: "flex",
    justifyContent: "center",
    color: "#3c763d",
    cursor: "pointer"
}

const style1 = {
    backgroundColor: "#0da5c6",
    borderColor: "#b6effb",
    borderRadius: "5px"
}

const HideText = () => {
    const [text, setText] = useState('Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.');
    return (
        <div>
            <div style={style} >
                <button style={style1} onClick={() => {
                    setText('  ')
                } }>
                    HideText
                </button>

            </div>
            <p>{ text }</p>
        </div>
    );
};

export default HideText;