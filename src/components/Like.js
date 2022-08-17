import React, {useState} from "react";

const style = {
    backgroundColor: "gray",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center"
}

const Like = () => {
    const [likes, setLikes] = useState(5);
    function increase() {
        setLikes(likes +1)
    }
    function decrease() {
        setLikes(likes -1)
    }

    return (
        <>,
            <div style={style}>
                <button onClick={ increase }>Прибавление
                </button>
                <p>{likes}</p>
            </div>
            <div style={style}>
                <button onClick={ decrease }>
                    Уменьшение
                </button>
            </div>
        </>
    )
}

export default Like;