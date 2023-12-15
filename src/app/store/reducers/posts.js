import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid'


const initialState = [
    {
        id: 1,
        title: 'Primeira Publicação',
        subtitle: 'Publicação boa',
        description: 'Publicação boa',
        get link() {
            return `/post/${this.id}`;
        },
        tags: ['categoria', 'categoria', 'categoria'],
        image: 'https://picsum.photos/500/301',
        conteudo: `A importância da tecnologia no mundo contemporâneo é indiscutível, permeando todos os aspectos da sociedade e moldando significativamente a forma como vivemos, trabalhamos e nos conectamos. A evolução tecnológica tem sido um catalisador fundamental para o progresso, transformando radicalmente a maneira como enfrentamos desafios e oportunidades.

Em um contexto global, a tecnologia desempenha um papel crucial no avanço econômico, impulsionando inovações que aumentam a eficiência e a produtividade em diversos setores. Da automação industrial à inteligência artificial, a tecnologia cria novas possibilidades, promovendo o desenvolvimento econômico e a criação de empregos.

No âmbito da comunicação, a tecnologia encurtou distâncias e conectou o mundo de maneiras inimagináveis. A internet e as redes sociais permitiram uma comunicação instantânea e o compartilhamento rápido de informações, aproximando pessoas de diferentes partes do globo e proporcionando um intercâmbio cultural sem precedentes.

Na área da saúde, avanços tecnológicos resultaram em diagnósticos mais precisos, tratamentos mais eficazes e pesquisas médicas inovadoras. A tecnologia desempenha um papel vital na busca por soluções para desafios globais de saúde, como a criação rápida de vacinas e a análise de grandes conjuntos de dados para identificar padrões e tendências.

Além disso, a tecnologia é um instrumento poderoso na promoção da educação, oferecendo plataformas de aprendizado online, recursos interativos e métodos inovadores que transcendem as barreiras físicas das salas de aula tradicionais. Isso democratiza o acesso ao conhecimento e cria oportunidades de aprendizado ao longo da vida.

No entanto, é crucial abordar as questões éticas e sociais associadas ao rápido avanço tecnológico, como a privacidade de dados, a automação de empregos e o acesso desigual às inovações. A implementação responsável da tecnologia é essencial para garantir que seus benefícios sejam equitativamente distribuídos e que ela contribua para a melhoria da qualidade de vida global.

Em síntese, a tecnologia é um pilar fundamental da sociedade moderna, impactando positivamente áreas essenciais e impulsionando o progresso. Seu papel continuará a evoluir, moldando o futuro e oferecendo soluções inovadoras para os desafios que enfrentamos, consolidando-se como um elemento vital na construção de um mundo mais conectado e sustentável.`
    },
    {
        id: 2,
        title: 'Segunda Publicação',
        subtitle: 'Publicação boa',
        description: 'Publicação boa',
        get link() {
            return `/post/${this.id}`;
        },
        tags: ['categoria', 'categoria', 'categoria'],
        image: 'https://picsum.photos/400/302',
        conteudo: `A importância da tecnologia no mundo contemporâneo é indiscutível, permeando todos os aspectos da sociedade e moldando significativamente a forma como vivemos, trabalhamos e nos conectamos. A evolução tecnológica tem sido um catalisador fundamental para o progresso, transformando radicalmente a maneira como enfrentamos desafios e oportunidades.

Em um contexto global, a tecnologia desempenha um papel crucial no avanço econômico, impulsionando inovações que aumentam a eficiência e a produtividade em diversos setores. Da automação industrial à inteligência artificial, a tecnologia cria novas possibilidades, promovendo o desenvolvimento econômico e a criação de empregos.

No âmbito da comunicação, a tecnologia encurtou distâncias e conectou o mundo de maneiras inimagináveis. A internet e as redes sociais permitiram uma comunicação instantânea e o compartilhamento rápido de informações, aproximando pessoas de diferentes partes do globo e proporcionando um intercâmbio cultural sem precedentes.

Na área da saúde, avanços tecnológicos resultaram em diagnósticos mais precisos, tratamentos mais eficazes e pesquisas médicas inovadoras. A tecnologia desempenha um papel vital na busca por soluções para desafios globais de saúde, como a criação rápida de vacinas e a análise de grandes conjuntos de dados para identificar padrões e tendências.

Além disso, a tecnologia é um instrumento poderoso na promoção da educação, oferecendo plataformas de aprendizado online, recursos interativos e métodos inovadores que transcendem as barreiras físicas das salas de aula tradicionais. Isso democratiza o acesso ao conhecimento e cria oportunidades de aprendizado ao longo da vida.

No entanto, é crucial abordar as questões éticas e sociais associadas ao rápido avanço tecnológico, como a privacidade de dados, a automação de empregos e o acesso desigual às inovações. A implementação responsável da tecnologia é essencial para garantir que seus benefícios sejam equitativamente distribuídos e que ela contribua para a melhoria da qualidade de vida global.

Em síntese, a tecnologia é um pilar fundamental da sociedade moderna, impactando positivamente áreas essenciais e impulsionando o progresso. Seu papel continuará a evoluir, moldando o futuro e oferecendo soluções inovadoras para os desafios que enfrentamos, consolidando-se como um elemento vital na construção de um mundo mais conectado e sustentável.`
    },
    {
        id: 3,
        title: 'Terceira Publicação',
        subtitle: 'Publicação boa',
        description: 'Publicação boa',
        get link() {
            return `/post/${this.id}`;
        },
        tags: ['categoria', 'categoria', 'categoria'],
        image: 'https://picsum.photos/300/303',
        conteudo: `A importância da tecnologia no mundo contemporâneo é indiscutível, permeando todos os aspectos da sociedade e moldando significativamente a forma como vivemos, trabalhamos e nos conectamos. A evolução tecnológica tem sido um catalisador fundamental para o progresso, transformando radicalmente a maneira como enfrentamos desafios e oportunidades.

Em um contexto global, a tecnologia desempenha um papel crucial no avanço econômico, impulsionando inovações que aumentam a eficiência e a produtividade em diversos setores. Da automação industrial à inteligência artificial, a tecnologia cria novas possibilidades, promovendo o desenvolvimento econômico e a criação de empregos.

No âmbito da comunicação, a tecnologia encurtou distâncias e conectou o mundo de maneiras inimagináveis. A internet e as redes sociais permitiram uma comunicação instantânea e o compartilhamento rápido de informações, aproximando pessoas de diferentes partes do globo e proporcionando um intercâmbio cultural sem precedentes.

Na área da saúde, avanços tecnológicos resultaram em diagnósticos mais precisos, tratamentos mais eficazes e pesquisas médicas inovadoras. A tecnologia desempenha um papel vital na busca por soluções para desafios globais de saúde, como a criação rápida de vacinas e a análise de grandes conjuntos de dados para identificar padrões e tendências.

Além disso, a tecnologia é um instrumento poderoso na promoção da educação, oferecendo plataformas de aprendizado online, recursos interativos e métodos inovadores que transcendem as barreiras físicas das salas de aula tradicionais. Isso democratiza o acesso ao conhecimento e cria oportunidades de aprendizado ao longo da vida.

No entanto, é crucial abordar as questões éticas e sociais associadas ao rápido avanço tecnológico, como a privacidade de dados, a automação de empregos e o acesso desigual às inovações. A implementação responsável da tecnologia é essencial para garantir que seus benefícios sejam equitativamente distribuídos e que ela contribua para a melhoria da qualidade de vida global.

Em síntese, a tecnologia é um pilar fundamental da sociedade moderna, impactando positivamente áreas essenciais e impulsionando o progresso. Seu papel continuará a evoluir, moldando o futuro e oferecendo soluções inovadoras para os desafios que enfrentamos, consolidando-se como um elemento vital na construção de um mundo mais conectado e sustentável.`
    },
    {
        id: 4,
        title: 'Quarta Publicação',
        subtitle: 'Publicação boa',
        description: 'Publicação boa',
        get link() {
            return `/post/${this.id}`;
        },
        tags: ['categoria', 'categoria', 'categoria'],
        image: 'https://picsum.photos/100/304',
        conteudo: `A importância da tecnologia no mundo contemporâneo é indiscutível, permeando todos os aspectos da sociedade e moldando significativamente a forma como vivemos, trabalhamos e nos conectamos. A evolução tecnológica tem sido um catalisador fundamental para o progresso, transformando radicalmente a maneira como enfrentamos desafios e oportunidades.

Em um contexto global, a tecnologia desempenha um papel crucial no avanço econômico, impulsionando inovações que aumentam a eficiência e a produtividade em diversos setores. Da automação industrial à inteligência artificial, a tecnologia cria novas possibilidades, promovendo o desenvolvimento econômico e a criação de empregos.

No âmbito da comunicação, a tecnologia encurtou distâncias e conectou o mundo de maneiras inimagináveis. A internet e as redes sociais permitiram uma comunicação instantânea e o compartilhamento rápido de informações, aproximando pessoas de diferentes partes do globo e proporcionando um intercâmbio cultural sem precedentes.

Na área da saúde, avanços tecnológicos resultaram em diagnósticos mais precisos, tratamentos mais eficazes e pesquisas médicas inovadoras. A tecnologia desempenha um papel vital na busca por soluções para desafios globais de saúde, como a criação rápida de vacinas e a análise de grandes conjuntos de dados para identificar padrões e tendências.

Além disso, a tecnologia é um instrumento poderoso na promoção da educação, oferecendo plataformas de aprendizado online, recursos interativos e métodos inovadores que transcendem as barreiras físicas das salas de aula tradicionais. Isso democratiza o acesso ao conhecimento e cria oportunidades de aprendizado ao longo da vida.

No entanto, é crucial abordar as questões éticas e sociais associadas ao rápido avanço tecnológico, como a privacidade de dados, a automação de empregos e o acesso desigual às inovações. A implementação responsável da tecnologia é essencial para garantir que seus benefícios sejam equitativamente distribuídos e que ela contribua para a melhoria da qualidade de vida global.

Em síntese, a tecnologia é um pilar fundamental da sociedade moderna, impactando positivamente áreas essenciais e impulsionando o progresso. Seu papel continuará a evoluir, moldando o futuro e oferecendo soluções inovadoras para os desafios que enfrentamos, consolidando-se como um elemento vital na construção de um mundo mais conectado e sustentável.`
    }
]

const reducers = {
  };

const postsSlices = createSlice(
    {
        name: 'posts',
        initialState,
        reducers
    }
)

export default postsSlices.reducer