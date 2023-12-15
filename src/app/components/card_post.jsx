import { styled } from 'styled-components';
import Link from 'next/link';


const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
    border-radius: 12px;
    background-color: #1a1a1a;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;
    cursor: pointer;
    margin-bottom: 1.5rem; 

    &:hover {
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    }
`;

const CardItemImage = styled.img`
    width: 100%;
    height: 10rem;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 1rem;
    transition: transform 0.3s ease-in-out;

    ${CardItem}:hover & {
        transform: scale(1.2); 
    }
`;

const CardItemTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff; 
    margin-bottom: 0.5rem;
`;

const CardItemSubtitle = styled.h4`
    font-size: 1rem;
    font-weight: 400;
    color: #ccc;
    margin-bottom: 0.5rem;
`;

const CardItemDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: #aaa; 
    margin-bottom: 1rem;
`;

const CardItemLink = styled.a`
    font-size: 1rem;
    font-weight: 600;
    color: #ff4081;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #00bcd4; 
    }
`;

const CardItemTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const CardItemTag = styled.div`
    padding: 0.5rem;
    border-radius: 4px;
    background-color: #2d2d2d; 
`;

const CardItemTagText = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: #ccc;
    margin: 0;
`;

export default function CardPost({ title, subtitle, description, link, tags, image }) {
    return (
        <CardItemLink href={link}>
            <CardItem>
                <CardItemImage src={image} alt={title} />
                <CardItemTitle>{title}</CardItemTitle>
                <CardItemSubtitle>{subtitle}</CardItemSubtitle>
                <CardItemDescription>{description}</CardItemDescription>
                <CardItemTags>
                    {tags.map((tag, index) => (
                        <CardItemTag key={index}>
                            <CardItemTagText>{tag}</CardItemTagText>
                        </CardItemTag>
                    ))}
                </CardItemTags>
            </CardItem>
        </CardItemLink>
    );
}
