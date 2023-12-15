"use client";

import { styled } from 'styled-components';
import Base from '../page';
import CardClass from '../components/card_class';
import GridPost from '../components/grip_post';

const ListClassWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
    margin-bottom: 2rem;
`;

const SpacedGridPost = styled(GridPost)`
    margin-top: 2rem;
`;

const SpacedCardClass = styled(CardClass)`
    margin-bottom: 2rem;
`;

const listClass = [
    {
        title: 'Modulo I',
        subtitle: 'ADS',
        description: 'Graduação no IFPI',
        image: 'https://seeklogo.com/images/A/ADS-logo-EAA675EF25-seeklogo.com.png'
    },
    {
        title: 'Modulo II',
        subtitle: 'ADS',
        description: 'Graduação no IFPI',
        image: 'https://seeklogo.com/images/A/ADS-logo-EAA675EF25-seeklogo.com.png'
    },
    {
        title: 'Modulo III',
        subtitle: 'ADS',
        description: 'Graduação no IFPI',
        image: 'https://seeklogo.com/images/A/ADS-logo-EAA675EF25-seeklogo.com.png'
    },
    {
        title: 'Modulo IV',
        subtitle: 'ADS',
        description: 'Graduação no IFPI',
        image: 'https://seeklogo.com/images/A/ADS-logo-EAA675EF25-seeklogo.com.png'
    },
    {
        title: 'Modulo VI',
        subtitle: 'ADS',
        description: 'Graduação no IFPI',
        image: 'https://seeklogo.com/images/A/ADS-logo-EAA675EF25-seeklogo.com.png'
    },
    {
        title: 'Modulo VI',
        subtitle: 'ADS',
        description: 'Graduação no IFPI',
        image: 'https://seeklogo.com/images/A/ADS-logo-EAA675EF25-seeklogo.com.png'
    },
];

export default function ListClass() {
    return (
        <Base title="Turma de ADS">
            <ListClassWrapper>
                <SpacedGridPost title='' subTitle=''>
                    {listClass.map((item, index) => (
                        <SpacedCardClass key={index} title={item.title} subtitle={item.subtitle} description={item.description} image={item.image} />
                    ))}
                </SpacedGridPost>
            </ListClassWrapper>
        </Base>
    );
}
