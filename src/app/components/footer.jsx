import { styled } from 'styled-components';

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: #000000BD;
    color: #fff;
    text-align: center;
    
`;

const ContactInfo = styled.div`
    margin-top: 1rem;
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <p>Noticiario - ADS</p>
            <p>Endereço: Rua Corrente do Piauí, N° 123</p>
            <p>Telefone: (11) 1234-5678</p>
            <ContactInfo>Email: noticiarioads@gmail.com</ContactInfo>
        </FooterWrapper>
    );
}
