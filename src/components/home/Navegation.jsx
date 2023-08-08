import styled from "styled-components";
import { size } from "../../Size";

const StyledNavegacion = styled.nav`
    @media (min-width: ${size.desktop}) {   
      display: flex;
      gap: 2rem;
    }
`;
const StyledNavegacion__enlace = styled.a`
    display: block;
    text-align: center;
    font-size: 1.8rem;
    color: var(--blanco);
`;

export default function Navegacion(){
    return (

        <StyledNavegacion>
            <StyledNavegacion__enlace href='nosotros.html'>Nosotros</StyledNavegacion__enlace>
            <StyledNavegacion__enlace href='cursos.html'>Cursos</StyledNavegacion__enlace>
            <StyledNavegacion__enlace href='contacto.html'>Contacto</StyledNavegacion__enlace>
        </StyledNavegacion>
    )
}