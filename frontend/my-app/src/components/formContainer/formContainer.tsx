import React from 'react'
import { BackgroundBox, RowBox, ColumnBox, UnStyledBox } from '@/assets/display/screensize.style'
import { FormContainer,Container1, WelcomeText, CenterDiv, } from "./formContainer.style";
import Input from '../inputs/input'
import { ThemeProvider } from 'styled-components';

interface Props{
    children:React.ReactNode
}
export interface IForm {
    color?: string,
}
 const Form = ({children} :Props) => {
  return (
   <></>
  )
}
export default Form