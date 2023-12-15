import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import NavBar from './nav_bar';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #0000008A;
`;

const HeaderBanner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem 2rem;
`;

const HeaderBannerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const HeaderBannerTitle = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: #2D1441;
`;

const HeaderBannerSubtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: #2D1441;
`;

const HeaderBannerImage = styled.img`
    width: 20rem;
    height: 20rem;
    border-radius: 2%;
`;

const publications = [
    { title: 'Era do Mobile', subtitle: 'Mobile', image: 'https://media.licdn.com/dms/image/C4E33AQHaGUxKGMo1Ew/productpage-image_1128_635/0/1616068892675/programiz_online_python_compiler_image?e=2147483647&v=beta&t=KW_bnDkP0PLEhmOGikZWlaF57WqCVcPHPK4DkUEuehI', link: '/' },
    { title: 'Flutter o Framework do Google!', subtitle: 'Dark', image: 'https://img-c.udemycdn.com/course/750x422/1764438_44b7_8.jpg' },
];

export default function Header() {
    const [currentPublicationIndex, setCurrentPublicationIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPublicationIndex((prevIndex) => (prevIndex + 1) % publications.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const currentPublication = publications[currentPublicationIndex];

    return (
        <HeaderContainer>
            <NavBar />
            <HeaderBanner>
                <HeaderBannerText>
                    <HeaderBannerTitle dangerouslySetInnerHTML={{ __html: currentPublication.title }} />
                    <HeaderBannerSubtitle>{currentPublication.subtitle}</HeaderBannerSubtitle>
                </HeaderBannerText>
                <HeaderBannerImage src={currentPublication.image} alt="logo" />
            </HeaderBanner>
        </HeaderContainer>
    );
}
