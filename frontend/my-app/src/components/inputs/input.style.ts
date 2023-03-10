import styled from 'styled-components';
import { Box }  from "@mui/material";
import {device} from "@/assets/display/screensize";


export const BoxStyled = styled(Box)`
    display: flex;
    min-width: ${props => props.theme.size(5) * 12}px;
    background-color: ${props => props.theme.colors.surfaceVariant};
    border-radius: ${props => props.theme.size(2)}px;
    border-color: ${props => props.theme.colors.outline};
    border: 20px;

    & .MuiInputBase-root {
        font-family: ${props => props.theme.typography.body.fontFamily};
        color: ${props => props.theme.colors.OnSurfaceVariant};

        &:hover {
        }

        @media ${device.MobileS} {
            min-width: ${props => props.theme.size(2) * 6}px;
            font-size: ${props => props.theme.size(3) + 2}px;
        }

        @media ${device.MobileM} {
            min-width: ${props => props.theme.size(3) * 6}px;
            font-size: ${props => props.theme.size(3) + 2}px;
        }

        @media ${device.MobileL} {
            min-width: ${props => props.theme.size(4) * 6}px;
            font-size: ${props => props.theme.size(5) + 2}px;
        }

        @media ${device.Tablet} {
        min-width: ${props => props.theme.size(7) * 6}px;
        font-size: ${props => props.theme.size(5) + 2}px;
        }

        @media ${device.Laptop} {
            min-width: ${props => props.theme.size(7) * 5}px;
            font-size: ${props => props.theme.size(6) + 2}px;
        }

        @media ${device.LaptopL} {
            min-width: ${props => props.theme.size(9) * 6}px;
            font-size: ${props => props.theme.size(7) + 2}px;

        }

        @media ${device.Desktop} {
            min-width: ${props => props.theme.size(9) * 6}px;
            font-size: ${props => props.theme.size(9) + 2}px;
        }
    }
    ;

    & .MuiInputBase-root {
        padding: 10px;
    };

    & .MuiInput-underline {
        border-bottom: none;
    }

`