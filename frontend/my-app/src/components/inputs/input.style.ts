import styled from 'styled-components';
import { Box }  from "@mui/material";


export const BoxStyled = styled(Box)`
    display: flex;
    min-width: ${props => props.theme.size(5) * 12}px;
    font-family: ${props => props.theme.typography.heading};

    & .MuiInputBase-root {
        /* background-color : red; */
        border-color: transparent;
        border-radius: ${props => props.theme.size(2)}px;

        &:hover {
        }
    };

    & .MuiInputBase-root {
        padding: 10px;
    };

    & .MuiInput-underline {
        border-bottom: none;
    }

`