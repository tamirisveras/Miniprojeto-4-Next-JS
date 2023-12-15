import { styled } from 'styled-components'
import Link from 'next/link'

const NavBarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:  #0000008D;
    color: #fff;
    padding: 3rem 2rem;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    img {
        width: 80px;  
        height: auto; 
        margin-right: 1rem;
    }
`

const Logo = styled.h1`
    margin: 0;
    font-size: 2.1rem;
    font-weight: bold;
    color: #fff;
`

const NavLinks = styled.div`
    display: flex;
    align-items: center;

    a {
        color: #fff;
        text-decoration: none;
        margin-left: 1.5rem;
        font-size: 1.2rem;
        padding: 0.5rem 1rem; 
        border-radius: 0.5rem;
        border: 1px solid #000000;
        transition: background-color 0.3s ease, color 0.3s ease;

        &:hover {
            background-color: #000000;
            color: #ffffff;
        }
    }
`

export default function NavBar() {
    return (
        <NavBarContainer>
            <Link href="/">
                <Logo>
                    <img src="https://img.freepik.com/vetores-premium/logotipo-de-noticias-de-cracha-simbolo-de-conceito-de-internet-de-marketing-de-negocios-de-pictograma-plano-moderno-para-design-de-site-ou-botoes-para-aplicativo-movel-icone-de-vetor-de-noticias-simbolo-do-globo-do-mundo_340607-38.jpg?w=740" alt="Noticiario - ADS"/>
                </Logo>
            </Link>
            <NavLinks>
                <Link href="/post-externo">Noticias</Link>
                <Link href="/list-class">Curso</Link>
                <Link href="/faculty">Projetos</Link>
                <Link href="/student-representative">Representante de ADS</Link>
            </NavLinks>
        </NavBarContainer>
    )
}
