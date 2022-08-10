import React from "react";
import About from "./About";
import PopularPosts from "./PopularPosts";
import Tags from "./Tags";
import Title from "./Title";

const popular_posts = [
    {
        img: 'https://www.w3schools.com/w3images/workshop.jpg',
        title: 'Lorem',
        desc: 'Sed mattis nunc'
    },
    {
        img: 'https://www.w3schools.com/w3images/gondol.jpg',
        title: 'Ipsum',
        desc: 'Praes tinci sed'
    },
    {
        img: 'https://www.w3schools.com/w3images/skies.jpg',
        title: 'Dorum',
        desc: 'Ultricies congue'
    },
    {
        img: 'https://www.w3schools.com/w3images/rock.jpg',
        title: 'Mingsum',
        desc: 'Lorem ipsum dipsum'
    }
]

const IntroductionMenu = () => {
    return (
        <div className="w3-col l4">
            <About/>
            <div className="w3-card w3-margin">
                <Title/>
                <PopularPosts
                    img={popular_posts[0].img}
                    title={popular_posts[0].title}
                    desc={popular_posts[0].desc}
                />
                <PopularPosts
                    img={popular_posts[1].img}
                    title={popular_posts[1].title}
                    desc={popular_posts[1].desc}
                />
                <PopularPosts
                    img={popular_posts[2].img}
                    title={popular_posts[2].title}
                    desc={popular_posts[2].desc}
                />
                <PopularPosts
                    img={popular_posts[3].img}
                    title={popular_posts[3].title}
                    desc={popular_posts[3].desc}
                />
            </div>
            <Tags/>
        </div>
    );
}

export default IntroductionMenu;