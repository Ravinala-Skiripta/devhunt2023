import { useState, useEffect } from 'react' 
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import Space from '@/components/space/space'
import Input from '@/components/inputs/input'
import { ThemeProvider } from 'styled-components'
import Header from '@/components/header/header'
import StyledCard from '@/components/card/card'
import withAuth from '../../utils/withAuth'
import { BackgroundBox, RowBox, ColumnBox, UnStyledBox } from '@/assets/display/screensize.style'
import { useAxios } from '@/hook/useAxios'
import LightTheme  from '@/core/theme/light'
import DarkTheme  from '@/core/theme/dark'

interface IJsonResponse{
  data: IUser[]
}

interface IUser{
  matricule: number;
  email:string;
  lastName: string;
  
}

function Hello() {
  
const [value, setValue] = useState('')
const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
const [decodedToken, setDecodedToken] = useState<any>({});

const themeswitch = (isDarkMode ? DarkTheme : LightTheme);

const router = useRouter();

const handleThemeToggle = () => {
  setIsDarkMode(!isDarkMode);
  localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
};

useEffect(() => {
  const currenttheme = JSON.parse(localStorage.getItem('isDarkMode') || 'false');
  if (currenttheme) {
    setIsDarkMode(currenttheme);
  }
}, []);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      router.push('/login/login');
    }
    else {
      setDecodedToken(JSON.parse(atob(token.split('.')[1])));
      console.log(decodedToken)
      const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          localStorage.removeItem('token');
          navigateToLoginPage();
        }

      }
        }, []);

        const navigateToLoginPage = () => {
          router.push('/login/login');
        };

  return (
    <>
      <ThemeProvider theme={themeswitch}>
        <Header props={handleThemeToggle} theme={themeswitch} token={decodedToken}/>
        <BackgroundBox>
          <h1>Secret Content</h1>
          <StyledCard />
        </BackgroundBox>
      </ThemeProvider>
    </>
  )
}

export default withAuth(Hello)