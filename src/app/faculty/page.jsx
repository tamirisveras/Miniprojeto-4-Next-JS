"use client";
import { styled } from 'styled-components';
import GridPost from '../components/grip_post';
import CardPost from '../components/card_post';

import Base from '../page';

const FacultyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
    background-color: #FFFFFF;
    color: #333333;
`;

const FacultyInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
`;

const NameCurso = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333333;
`;

const Description = styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #333333;
`;

const posts = [
    {
        title: 'Projeto 1',
        subtitle: 'projeto em andamento',
        description: 'Repositório de projetos do curso de Análise e Desenvolvimento de Sistemas esta no github.',
        link: 'https://google.com',
        tags: ['Python', 'Web', 'Django'],
        image: 'https://picsum.photos/100/200'
    },
    {
        title: 'Projeto 2',
        subtitle: 'projeto em andamento',
        description: 'Repositório de projetos do curso de Análise e Desenvolvimento de Sistemas esta no github',
        link: 'https://google.com',
        tags: ['C', 'Estutura', 'Dados'],
        image: 'https://picsum.photos/300/300',
    },
    {
        title: 'Projeto 3',
        subtitle: 'projeto em andamento',
        description: 'Repositório de projetos do curso de Análise e Desenvolvimento de Sistemas esta no github',
        link: 'https://google.com',
        tags: ['JavaScript', 'WEB', 'React'],
        image: 'https://picsum.photos/400/300',
    },
    {
        title: 'Projeto 4',
        subtitle: 'projeto em andamento',
        description: 'Repositório de projetos do curso de Análise e Desenvolvimento de Sistemas esta no github',
        link: 'https://google.com',
        tags: ['Java', 'Poo', 'Solid'],
        image: 'https://picsum.photos/800/200',
    },
];

export default function Faculty() {
    return (
        <Base>
            <FacultyWrapper>
                <FacultyInfo>
                    <NameCurso>Análise e Desenvolvimento de Sistemas</NameCurso>
                    <Description>
                        O curso de Análise e Desenvolvimento de Sistemas prepara os estudantes para atuarem no desenvolvimento, análise e implementação de sistemas de informação. Durante a formação, os alunos adquirem conhecimentos em programação, banco de dados, engenharia de software, entre outras áreas, capacitando-os para atender às demandas do mercado de tecnologia da informação. Este curso proporciona uma base sólida para quem deseja seguir carreira na área de tecnologia e inovação.
                    </Description>
                </FacultyInfo>
                <GridPost title="Projetos do Curso">
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
                </GridPost>
            </FacultyWrapper>
        </Base>
    );
}
