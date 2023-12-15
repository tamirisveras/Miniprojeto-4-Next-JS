import { styled } from 'styled-components';

const GridWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem 2rem;
`;

const GridTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #FFFFFF;
`;

const GridSubtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: #FFFFFF;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin-top: 2rem;
`;

export default function GridPost({ title, subTitle, children }) {
    return (
        <GridWrapper>
            <GridTitle>{title}</GridTitle>
            <GridSubtitle>{subTitle}</GridSubtitle>
            <GridContainer>{children}</GridContainer>
        </GridWrapper>
    );
}
