import styled from 'styled-components';
import { Box } from '@mui/material';
import { IButton } from './button';
import { device } from '@/assets/display/screensize';


export const BoxStyled = styled(Box)<IButton>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    width: 100%;
    background-color: ${props => props.color != '' ? props.color : props.theme.colors.onTertiary};


    
    & .MuiButton-root {
        color: ${props => props.color != '' ? props.color.onError : props.theme.colors.tertiary};
        background-color: ${props => props.color != '' ? props.color.error : 'transparent'};
        width: 100%;
        border-radius: 15px;

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
            min-width: ${props => props.theme.size(7) * 6}px;
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
`
