import styled from "styled-components";
import { Props } from "./";

export const SpanStyled = styled.span<Props>`
    position: relative; 

&::before{
    content: '';
    width: 20px;
    height: 22px;
    background-size: auto;
    background-image: ${props => props.image ? `url(${props.image})` : 'none'};
    display:inline-block;
    margin-right: 10px;
    background-repeat: no-repeat;
    vertical-align: middle
}
`

export const TitleStyled = styled.h2`
color: var(--light-blue);
`

export const ContainerStyled = styled.div`
display: flex;
align-items: center;
`