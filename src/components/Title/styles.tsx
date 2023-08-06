import styled from "styled-components";
import { Props } from "./";

export const SpanStyled = styled.span<Props>`
    position: relative; 

&::before{
    content: '';
    width: 30px;
    height: 30px;
    background-size: cover;
    background-image: ${props => props.image ? `url(${props.image})` : 'none'};
    display:inline-block;
    vertical-align:middle;
    margin-right: 10px;
}
`

export const TitleStyled = styled.h2`
color: var(--light-blue);
`

export const ContainerStyled = styled.div`
display: flex;
align-items: center;
`