import styled from "styled-components";

export const CenterDiv = styled.div`
    display: flex;
    margin : 2%;
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 15px;
    justify-content: space-evenly;
    translate: 0% 15%;
`
export const FormContainer = styled.div`
    display: flex;
    margin: 1% 2% 5% 2%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Container1 = styled.div`
    display: flex;
`

export const InputContainer =styled.div`
    display :flex;
    /* padding: 10px; */
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`


export const ButtonContainer =styled.div`
    display :flex;

`

export const DivImg = styled.div`
    display: flex;
    translate: -0% 0%;
`