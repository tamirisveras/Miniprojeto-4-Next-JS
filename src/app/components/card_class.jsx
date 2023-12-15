import { styled } from 'styled-components';

const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #4A474D;
`;

const CardItemimage = styled.img`
    width: 100%;
    height: 10rem;
    border-radius: 0.5rem;
    object-fit: cover; 
`;

const CardItemTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff; 
    margin-top: 1rem; 
`;

const CardItemSubtitle = styled.h4`
    font-size: 1rem;
    font-weight: 400;
    color: #fff; 
    margin-top: 0.5rem;
`;

const CardItemDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    margin-top: 0.5rem; 
`;

export default function CardClass({ title, subtitle, description, image }) {
    return (
        <CardItem>
            <CardItemimage src={image} alt={title} />
            <CardItemTitle>{title}</CardItemTitle>
            <CardItemSubtitle>{subtitle}</CardItemSubtitle>
            <CardItemDescription>{description}</CardItemDescription>
        </CardItem>
    );
}
