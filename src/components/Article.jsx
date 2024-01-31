import React from 'react';

function Article() {
    const articles = [
        {
            title: 'On the street in Brooklyn',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imageUrl: 'https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg',
        },
        {
            title: 'Vintage in Vogue',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            imageUrl: 'https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg',
        },
    ];

    return (
        <main>
            {articles.map((article, index) => (
                <div id={index}>
                    <h2>{article.title}</h2>
                    <img src={article.imageUrl} alt="" />
                    <p>{article.content}</p>

                    <p>
                        Continues... <a href="http://www.google.com">Read more</a>
                    </p>
                </div>
            ))}
        </main>
    );
}

export default Article;
