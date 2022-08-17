import React, {useState} from 'react';

const style = {
    backgroundColor: "gray",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

const LikeWinder = () => {

    const [text, setText] = useState('Press any Button');
    const [num, setNum] = useState(0);
    function addOne() {
        setNum(num +1)
    }
    function addFive() {
        setNum(num +5)
    }
    function addTen() {
        setNum(num +10)
    }

    return (
        <>,
            <div style={style}>
                <button onClick={() => {{addOne()}
                    setText('added 1')
                }}>Plus 1
                </button>
            </div>
            <div style={style}>
                <button onClick={() => {
                    {addFive()}
                    setText('added 5')
                }}>Plus 5
                </button>
            </div>
            <div style={style}>
                <button onClick={() => {
                    {addTen()}
                    setText('added 10')
                }}>Plus 10
                </button>
                <p>{text}</p>
                <p>{num}</p>
            </div>
        </>
    )
};

export default LikeWinder;
