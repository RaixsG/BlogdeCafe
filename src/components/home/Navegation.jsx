import styled from "styled-components";

import { size } from "../../Size";
import { HyperLink } from "../styled-reuse/GlobalStyled";

const StyledNavegacion = styled.nav`

    /* margin: 0 .5rem; */
    @media (min-width: ${size.desktop}) {   
      display: flex;
      gap: 2rem;
    }
`;
const StyledNavegacion__enlace = styled(HyperLink)`
    display: block;
    font-size: 1.8rem;
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