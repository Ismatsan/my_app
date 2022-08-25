import React from 'react';
import About from "./About";
import PopularPosts from "./PopularPosts/PopularPosts";
import Tags from "./Tags";
import Form from "./Form/Form";
import Link from "./Link/Link";


const IntroductionMenu = () => {
    return (
        <div className="w3-col l4">
            <About/>
            <PopularPosts/>
            <Tags/>
            <Form/>
            <Link/>
        </div>
    )
}

export default IntroductionMenu;