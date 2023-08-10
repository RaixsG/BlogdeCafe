import styled from "styled-components";

import { size } from "../../Size";
import * as pictures from '../../assets/indexImg';
import { Div } from "../styled-reuse/GlobalStyled";


// Others
const StyledH3 = styled.h3``;

const StyledBlog = styled(Div)`
    @media (min-width: ${size.desktop}) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 4rem;
    }
`;
const StyledMain = styled.main``;
const StyledAside = styled.aside``;
const StyledArticle = styled.article``;
const StyledImg = styled(Div)``;
const StyledInputContainer = styled(Div)``;
const StyledH4 = styled.h4``;
const StyledP = styled.p``;

export default function Blog() {
    return (

        <StyledBlog>
            <StyledMain>
                <StyledH3>Nuestro Blog</StyledH3>
                <StyledArticle>
                    <StyledImg>
                        <img src={pictures.blog1} alt="Blog 1" />
                    </StyledImg>
                    <StyledInputContainer>
                        <StyledH4>Tipos de Grano de Café</StyledH4>
                        <StyledP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit provident voluptates cupiditate at iure inventore laboriosam vero quae vel, quos dolor natus voluptatem porro repudiandae dolorum modi hic! Ut.</StyledP>
                    </StyledInputContainer>
                </StyledArticle>
            </StyledMain>
            <StyledAside>
                <StyledH3>Nuestros Cursos y Talleres</StyledH3>
            </StyledAside>
        </StyledBlog>

    )
}
