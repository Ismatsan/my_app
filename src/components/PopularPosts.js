import React from 'react';
import PopularPostElem from "./PopularPostElem"
import popularPosts from "../constans/popularPosts";



const PopularPosts = () => {
    const elems=popularPosts.map((item,index) => {
        return <PopularPostElem
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
        />
    })

    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {elems}
                </ul>
            </div>
            <hr/>
        </>
    );
}

export default PopularPosts;