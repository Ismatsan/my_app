import React from "react";
import TagElem from "./TagElem";
import tags from "../constants/tags";

const Tags = () => {
    const elems = tags.map((item, index) => {
        return <TagElem
            key={index}
            title={item.title}
        />
    })

    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Tags</h4>
                </div>
                <div className="w3-container w3-white">
                    <p>
                        <span className="w3-tag w3-black w3-margin-bottom">Travel</span>{" "}
                        { elems }
                    </p>
                </div>
            </div>
        </>
    );
};

export default Tags;