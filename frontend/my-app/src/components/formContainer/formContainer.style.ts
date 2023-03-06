import React from 'react';
import styled from 'styled-components';
import {IForm} from './formContainer'

export const CenterDiv = styled.div`
display: flex;
justify-items: center;
align-items:center;
flex-direction: column;
translate: 0% 50%;
`
export const FormContainer = styled.div<IForm>`
display: flex;
height: 50vh;
width:60vw;
box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
backdrop-filter: blur(8.5px);
border-radius: 10px;
color:#ffff;
`
export const Container1 = styled.div`
display: flex;
justify-content:center;
align-items:center;
flex-direction: column;
height: 100%;
width:50%;
background-color:${props => props.color};`

export const WelcomeText =styled.div`
margin :3rem 0 2rem 0;
`


