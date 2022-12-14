import React from 'react';
import PopularPostElem from "../PopularPostElem"
import posts from "../../constants/popularPosts";
import style from "./PopularPosts.module.css";


const PopularPosts = () => {
    let popularPosts =posts;
    let btnMore = null;
    if (posts.length > 10){
        popularPosts = posts.slice(0, 10);
        btnMore =<button className="btn-more">Еще</button>;
    }

    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4 className={style.title}>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {
                        popularPosts.map((item, index) => {
                            return <PopularPostElem
                                key={index}
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                            />
                        })
                    }
                    { btnMore }
                </ul>
            </div>
            <hr/>
        </>
);
}

export default PopularPosts;