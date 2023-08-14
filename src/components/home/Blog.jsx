import styled from "styled-components";

import { size } from "../../Size";
import * as pictures from '../../assets/indexImg';
import * as globalStyled from '../styled-reuse/GlobalStyled';


// Others
const StyledH3 = styled(globalStyled.H3)``;

const StyledBlog = styled(globalStyled.Div)`
    @media (min-width: ${size.desktop}) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 4rem;
    }
`;
const StyledMain = styled.main``;
const StyledAside = styled.aside``;
const StyledArticle = styled.article`

    /* <{ $primary ?: boolean;}>
    border-bottom: ${props => props.$primary ? "none" : "1px solid var(--gris)"};
    margin-bottom: ${props => props.$primary ? "0" : "2rem"}; */

    border-bottom: 1px solid var(--gris);
    margin-bottom: 2rem;
`;
const StyledImg = styled(globalStyled.Div)``;
const StyledInputContainer = styled(globalStyled.Div)``;
const StyledH4 = styled(globalStyled.H4)``;

export default function Blog() {
    return (

        <StyledBlog>
            <StyledMain>
                <StyledH3>Nuestro Blog</StyledH3>
                <StyledArticle>
                    <StyledImg>
                        <globalStyled.Image src={pictures.blog1} alt="Imagen Blog 1" />
                    </StyledImg>
                    <StyledInputContainer>
                        <StyledH4>Tipos de Grano de Café</StyledH4>
                        <globalStyled.Parrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit provident voluptates cupiditate at iure inventore laboriosam vero quae vel, quos dolor natus voluptatem porro repudiandae dolorum modi hic! Ut.</globalStyled.Parrafo>
                        <globalStyled.HyperLink href="#">Leer Entrada</globalStyled.HyperLink>
                    </StyledInputContainer>
                </StyledArticle>

                <StyledArticle>
                    <StyledImg>
                        <globalStyled.Image src={pictures.blog1} alt="Imagen Blog 1" />
                    </StyledImg>
                    <StyledInputContainer>
                        <StyledH4>3 Delicios Recetas de Café</StyledH4>
                        <globalStyled.Parrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit provident voluptates cupiditate at iure inventore laboriosam vero quae vel, quos dolor natus voluptatem porro repudiandae dolorum modi hic! Ut.</globalStyled.Parrafo>
                        <globalStyled.HyperLink href="#">Leer Entrada</globalStyled.HyperLink>
                    </StyledInputContainer>
                </StyledArticle>

                <StyledArticle>
                    <StyledImg>
                        <globalStyled.Image src={pictures.blog1} alt="Imagen Blog 1" />
                    </StyledImg>
                    <StyledInputContainer>
                        <StyledH4>Beneficios del Café</StyledH4>
                        <globalStyled.Parrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit provident voluptates cupiditate at iure inventore laboriosam vero quae vel, quos dolor natus voluptatem porro repudiandae dolorum modi hic! Ut.</globalStyled.Parrafo>
                        <globalStyled.HyperLink href="#">Leer Entrada</globalStyled.HyperLink>
                    </StyledInputContainer>
                </StyledArticle>
            </StyledMain>
            <StyledAside>
                <StyledH3>Nuestros Cursos y Talleres</StyledH3>
            </StyledAside>
        </StyledBlog>

    )
}
