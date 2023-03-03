import GlobalStyle from '@/core/theme/global'
import { ThemeProvider } from 'styled-components'
import theme from '@/core/theme/theme'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
