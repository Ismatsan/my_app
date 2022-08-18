import React from "react";
import TagElem from "./TagElem";

const info =[
    {
        title:'New York'
    },
    {
        title:'London'
    },
    {
        title:'IKEA'
    },
    {
        title:'NORWAY'
    },
    {
        title:'DIY'
    },
    {
        title: 'Ideas'
    },
    {
        title:'Baby'
    },
    {
        title:'Family'
    },
    {
        title:'News'
    },
    {
        title:'Clothing'
    },
    {
        title:'Shopping'
    },
    {
        title:'Sports'
    },
    {
        title:'Games'
    }
]
const Tags = () => {
    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Tags</h4>
                </div>
                <div className="w3-container w3-white">
                    <p>
                        <span className="w3-tag w3-black w3-margin-bottom">Travel</span>{" "}
                        <TagElem title={info[0].title}/>
                        <TagElem title={info[1].title}/>
                        <TagElem title={info[2].title}/>
                        <TagElem title={info[3].title}/>
                        <TagElem title={info[4].title}/>
                        <TagElem title={info[5].title}/>
                        <TagElem title={info[6].title}/>
                        <TagElem title={info[7].title}/>
                        <TagElem title={info[8].title}/>
                        <TagElem title={info[9].title}/>
                        <TagElem title={info[10].title}/>
                        <TagElem title={info[11].title}/>
                        <TagElem title={info[12].title}/>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Tags;