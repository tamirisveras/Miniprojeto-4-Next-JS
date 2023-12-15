import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import GridPost from '../components/grip_post';
import CardPost from '../components/card_post';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem 2rem;
  background-color: #FFFFFF;
  color: #00000;
`;


export default function Home() {
  const posts = useSelector((state) => state.posts);

  return (
    <HomeWrapper>
      <GridPost>
        {posts.map((post) => (
          <CardPost
            key={post.id}
            title={post.title}
            subtitle={post.subtitle}
            description={post.description}
            link={post.link}
            tags={post.tags}
            image={post.image}
          />
        ))}
      </GridPost>
    </HomeWrapper>
  )
}
