import styled from 'styled-components';

import background from './assets/img/banner.jpg';
import './App.css';
import { size } from './Size';

import Blog from './components/home/Blog';
import Navegacion from './components/home/Navegation';

const Header = styled.header`
    background-image: url(${background});
    height: 60rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

const Contenedor = styled.div``;

const Barra = styled.div`
  @media (min-width: ${size.desktop}) {   
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Logo = styled.a`
    color: var(--blanco);
    margin: 0;
    text-align: center;
`;
const Logo__nombre = styled.h1`
    font-weight: 400;
`;
const Logo__bold = styled.span`
    font-weight: 700;
`;

const Header__texto = styled.div`
    text-align: center;
    color: var(--blanco);
    margin-top: 5rem;

    @media (min-width: ${size.desktop}) {
        margin-top: 15rem;
    }
`;

export default function App() {

  return (
    <>
      <Header>
        <Contenedor>
          <Barra>
            <Logo href="index.html">
              <Logo__nombre>
                Blog<Logo__bold>DeCafé</Logo__bold>
              </Logo__nombre>
            </Logo>
            <Navegacion />
          </Barra>
        </Contenedor>
        <Header__texto>
          <h2>Blog de café con consejos y cursos</h2>
          <p>Aprende de los expertos con las mejores recetas y consejos</p>
        </Header__texto>
      </Header>
      <Blog />
    </>
  )
}
