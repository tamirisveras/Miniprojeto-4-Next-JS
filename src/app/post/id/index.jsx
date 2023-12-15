import { styled } from 'styled-components';
import { useSelector } from 'react-redux';

const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`;

const BlogContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`;

export default function Post({ id }) {
    const post = useSelector(state => {
        const foundPost = state.posts.find(item => parseInt(item.id) === parseInt(id));
        console.log(foundPost);
        return foundPost;
    });

    return (
        <>
            <PostWrapper>
                {post ? (
                    <>
                        <h1>{post.title}</h1>
                        <BlogContent>
                            <p>{post.conteudo}</p>
                        </BlogContent>
                    </>
                ) : (
                    <h1>Publicação não encontrada!</h1>
                )}
            </PostWrapper>
        </>
    );
}
