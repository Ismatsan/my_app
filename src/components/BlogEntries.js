import React from "react";
import Post from "./Post";
import posts from "../constans/posts";



const BlogEntries = () =>{
    const elems =posts.map((item, index) =>{
            return <Post
                key={index}
                img ={item.img}
                title ={item.title}
                title_desc ={item.title_desc}
                created_date ={item.created_date}
                desc ={item.desc}
                count_comments ={item.count_comments}
            />
        })

    return(
        <div className="w3-col l8 s12">
            {elems}
            <Post/>
            <Post title="этот title из родителя"/>
        </div>
    )
}

export default BlogEntries;