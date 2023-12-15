"use client"
import { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import Base from '../page'
import api, { getNews } from '../api/api'
import CardPost from '../components/card_post';


const PostInternoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`


export default function PostInterno() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            try {
                const response = await api.get('');
                const articles = response.data.articles.filter((article) => article.urlToImage);

                setPosts(
                    articles.map((post) => ({
                        title: post.title,
                        subtitle: post.author,
                        description: post.description,
                        link: post.url,
                        tags: [],
                        image: post.urlToImage,
                    }))
                );
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        getPosts();
    }, []);

    return (
        <Base>
            <h1>Notícias</h1>
            <PostInternoWrapper>
                {posts.map((post, index) => (
                    <CardPost
                        key={index}
                        title={post.title}
                        subtitle={post.subtitle}
                        description={post.description}
                        link={post.link}
                        tags={post.tags}
                        image={post.image}
                    />
                ))}
            </PostInternoWrapper>
        </Base>
    );
}