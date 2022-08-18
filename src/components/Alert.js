import React, {useState} from 'react';

const style = {
    width:"705px",
    height:"58px",
    backgroundColor: "#cff4fc",
    borderColor:"#b6effb",
    marginLeft: "68px",
    padding: "5px",
    display: "flex",
    justifyContent: "center",
    color: "#3c763d",
    borderRadius: "5px",
    cursor: "pointer"
}
const style1 = {
    width:"700px",
    backgroundColor: "#cff4fc",
    borderColor:"transparent",
    borderRadius: "5px",
    cursor: "pointer"
}

const Alert = () => {
    const [text, setText] = useState('A simple info alert—check it out!');
    return (
        <div style={style} >
            <button style={style1} onClick={() => {
                setText('Сегодня будет солнечно!')
            } }>
                <p>{ text }</p>
            </button>

        </div>
    )
}

export default Alert;