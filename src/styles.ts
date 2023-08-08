import styled from "styled-components";

interface activating {
    activeCard: boolean;
}

export const ActivatingStyled = styled.div < activating > `
background: ${props => (props.activeCard ? 'rgba(0, 0, 0, 0.9)' : 'none')};
filter: ${(props) => (props.activeCard ? 'brightness(0.1)' : 'brightness(1)')};
transition: 1s;
`