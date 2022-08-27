import React from 'react';
import style from "./Link.module.css";

const Link = () => {
    return (
        <div className={style.card} >
            <a className={style.sender} href="#" role="button">
            Вверх
            </a>
        </div>
    );
};

export default Link;