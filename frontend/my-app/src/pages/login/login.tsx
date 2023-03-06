import React, {useState} from 'react'
import { useRouter } from 'next/router'
import Form from '@/components/formContainer/formContainer';
import { ThemeProvider } from 'styled-components';
import theme from '@/core/theme/light';
import Input from '@/components/inputs/input';
import Space from '@/components/space/space';
import StyledButton from '@/components/buttons/button';
import { AuthService } from '../../../service/auth-service';
import {InputContainer,ButtonContainer,Container1,CenterDiv,FormContainer, DivImg} from "./login.style";
import LightTheme  from '@/core/theme/light'
import DarkTheme  from '@/core/theme/dark'
import Image from 'next/image'

export interface ILogin {
  user: string;
  password: string;
}

export default function Login () {


    const [ usera, setUsera ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const [ message, setMessage ] = useState<string>('')

    
    
    const router = useRouter();
    
    //About Theme
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const themeswitch = (isDarkMode ? DarkTheme : LightTheme);
    const handleThemeToggle = () => {
      setIsDarkMode(!isDarkMode);
      localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
    };
  

    
    const handleSubmit = (e : any) => {
      e.preventDefault();
      if (!usera || !password){
        setMessage('Error');
      }
      else {

        const data = {
          username: usera,
          password: password,
        }

        console.log(data.username, data.password);
        const token = AuthService.login(data.username, data.password)
        .then(response => {
          console.log(response);
          router.push('/');
          setUsera('');
          setPassword('');
        })
        .catch(error => {
          console.log(error);
        })
      }
    }

    const handleReset = (e : any) => {
      setUsera('');
      setPassword('');
    }


  return (
    <>
      <ThemeProvider theme={themeswitch}>
        <CenterDiv>
          <FormContainer>
                <DivImg>
                <InputContainer>
                <Space size={0} height={5} />
                <h1>
                  Rav'in Hub
                </h1>
                <Space size={0} height={2} />
                    <Input
                    id='User'
                    label='User'
                    type='text'
                    value={usera}
                    setValue={setUsera}
                    />
                    <Space size={0} height={3} />
                    <Input
                    id='Password'
                    label='Password'
                    type='password'
                    value={password}
                    setValue={setPassword}
                    />
                    <Space size={0} height={10} />
                    <StyledButton text='Login' onClick={handleSubmit} color={''}/>
                    <Space size={0} height={2} />
                    <StyledButton text='Reset' onClick={handleReset} color={themeswitch.colors}/>
                </InputContainer>
                </DivImg>
          </FormContainer>
        </CenterDiv> 
      </ThemeProvider>
    </>
   
       
         
  )
}
