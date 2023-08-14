import styled from 'styled-components';

import background from './assets/img/banner.jpg';
import { size } from './Size';
// Styled
import * as globalStyled from './components/styled-reuse/GlobalStyled';
// Components
import Blog from './components/home/Blog';
import Navegacion from './components/home/Navegation';

const Header = styled.header`
    background-image: url(${background});
    height: 60rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

const Contenedor = styled(globalStyled.Div)``;

const Barra = styled(globalStyled.Div)`

  margin: 0 .5rem; 
  @media (min-width: ${size.desktop}) {   
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Logo = styled(globalStyled.HyperLink)`
    margin: 0;
`;
const Logo__nombre = styled(globalStyled.H1)`
    font-weight: 400;
`;
const Logo__bold = styled.span`
    font-weight: 700;
`;

const Header__texto = styled(globalStyled.Div)`
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
          <globalStyled.H2>Blog de café con consejos y cursos</globalStyled.H2>
          <globalStyled.Parrafo>Aprende de los expertos con las mejores recetas y consejos</globalStyled.Parrafo>
        </Header__texto>
      </Header>
      <Blog />
    </>
  )
}
