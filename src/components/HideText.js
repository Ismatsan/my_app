import React, { useState } from 'react';

const style = {
    backgroundColor: "#cff4fc",
    borderColor: "#b6effb",
    padding: "5px",
    display: "flex",
    justifyContent: "center",
    color: "#3c763d",
}

const style1 = {
    width:"115px",
    backgroundColor: "#73cfe3",
    borderColor: "#b6effb",
    cursor: "pointer",
    borderRadius: "5px"
}

const HideText = () => {
    const [text, setText] = useState('Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.');
    return (
        <>
            <div style={style} >
                <button style={style1} onClick={() => {
                    setText(' ')
                } }>
                    HideText
                </button>

            </div>
            <p>{ text }</p>
        </>
    );
};

export default HideText;