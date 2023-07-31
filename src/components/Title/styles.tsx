import styled from "styled-components";
import { Props } from ".";

export const SpanStyled = styled.span<Props>`
background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-image: ${props => props.image ? `url(${props.image})` : 'none'};
`

export const TitleStyled = styled.h2`
color: var(--light-blue);
`

export const ContainerStyled = styled.div`
display: flex;
align-items: center;
`