import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import Space from '@/components/space/space'
import Input from '@/components/inputs/input'
import StyledSwitch from '@/components/switch/switch'
import { BackgroundBox, RowBox, ColumnBox, UnStyledBox } from '@/assets/display/screensize.style'
import Header from '@/components/header/header'
import LightTheme  from '@/core/theme/light'
import DarkTheme  from '@/core/theme/dark'
import withAuth from '../../utils/withAuth'

function Home() {

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
      <Header props={handleThemeToggle} theme={themeswitch} token={decodedToken} />
        <BackgroundBox>
          <Link href='/login/login'><h1>BIII</h1></Link>
          <Link href='/hello'><h1>Protected</h1></Link>
            <UnStyledBox>
                <RowBox size={1}>
                  <p>O</p>
                  <p>B</p>
                </RowBox>
                <Space size={1} height={0} />
                <RowBox size={1}>
                  <p>O</p>
                  <p>B</p>
                </RowBox>
                <Space size={1} height={0} />
                <RowBox size={1}>
                  <p>BOOO</p>
                  <p>BAAAAaaaaaaaaaaaaaa</p>
                </RowBox>
            </UnStyledBox>
          <h1>Div</h1>
          <h1>Div</h1>
          <Input id='name' type='text' label='Name' value={value} setValue={setValue}/>
        <h2>BOOO</h2><Link href='/login/login'><h1>BIII</h1></Link>
            <UnStyledBox>
                <RowBox size={1}>
                  <p>O</p>
                  <p>B</p>
                </RowBox>
                <Space size={1} height={0} />
                <RowBox size={1}>
                  <p>O</p>
                  <p>B</p>
                </RowBox>
                <Space size={1} height={0} />
                <RowBox size={1}>
                  <p>BOOO</p>
                  <p>BAAAAaaaaaaaaaaaaaa</p>
                </RowBox>
            </UnStyledBox>
          <h1>Div</h1>
          <h1>Div</h1>
          <h1>Div kely</h1>
        <Input id='name' type='text' label='Name' value={value} setValue={setValue}/>
        <h2>BOOO</h2>
        </BackgroundBox>
      </ThemeProvider>
    </>
  )
}

export default withAuth(Home);
