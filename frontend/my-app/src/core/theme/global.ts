import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body {
        font-size: ${props => props.theme.size(5) + 2}px;
        font-family: ${props => props.theme.typography.body.fontFamily};
        font-weight: ${props => props.theme.typography.body.fontWeight};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${props => props.theme.typography.heading.fontFamily};
    }

`

export default GlobalStyle