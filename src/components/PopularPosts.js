import React from 'react';
import PopularPostElem from "./PopularPostElem"

const data = [
    {
        img: 'https://www.w3schools.com/w3images/workshop.jpg',
        title: 'Популярный пост №1',
        desc: 'Sed mattis nunc'
    },
    {
        img: 'https://www.w3schools.com/w3images/gondol.jpg',
        title: 'Популярный пост №2',
        desc: 'Praes tinci sed'
    },
    {
        img: 'https://www.w3schools.com/w3images/skies.jpg',
        title: 'Популярный пост №3',
        desc: 'Ultricies congue'
    },
    {
        img: 'https://www.w3schools.com/w3images/rock.jpg',
        title: 'Популярный пост №4',
        desc: 'Lorem ipsum dipsum'
    }
]
console.log(data);

const PopularPosts = () => {
    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    <PopularPostElem
                        img={data[0].img}
                        title={data[0].title}
                        desc={data[0].desc}
                    />
                    <PopularPostElem
                        img={data[1].img}
                        title={data[1].title}
                        desc={data[1].desc}
                    />
                    <PopularPostElem
                        img={data[2].img}
                        title={data[2].title}
                        desc={data[2].desc}
                    />
                    <PopularPostElem
                        img={data[3].img}
                        title={data[3].title}
                        desc={data[3].desc}
                    />
                </ul>
            </div>
            <hr/>
        </>
    );
}

export default PopularPosts;