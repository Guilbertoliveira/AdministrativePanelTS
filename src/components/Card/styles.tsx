import styled from "styled-components";

export const DivStyled = styled.div`
    flex: 40%;
    max-width: 100%;
    background-color: #ffffff;
    padding: 5px 10px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    color: var(--grey);
    margin: 10px 10px;
    word-wrap: break-word;
`

export const DescribeStyled = styled.span`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
`

export const NameStyled = styled.p`
color: var(--grey);
font-weight: 700;
font-size: 18px;
margin:0px;

::before{
    content: "Dr. ";
}
`

export const SpecialityStyled = styled.p`
color: var(--grey);
font-weight: 400;
margin:0px;
`

export const RatingStyled = styled.span`
`

export const ContainerProfessional = styled.span`
display: flex;
`

export const CardStyled = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
padding: 0px 40px;
`

export const ImageStyled = styled.span`
border-radius: 80px;
overflow: hidden;
height: 80px;
min-width: 80px;
max-width: 80px;
border: 3px solid var(--light-blue);
margin-right: 10px;

img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
`

