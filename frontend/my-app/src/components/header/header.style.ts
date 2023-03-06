import styled from 'styled-components';
import { Box, Menu } from '@mui/material';
import { IHeader } from './header';
import { device } from '@/assets/display/screensize';

export const HeaderWrapper = styled(Box)`
    display: flex;
    top: 0;
    position: sticky;
    box-shadow: 0px 0px 2px 0px ${props => props.theme.colors.outline};
    background-color: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.OnSurfaceVariant};
    justify-content: space-between;
`

export const HeaderBox = styled(Box)<IHeader>`
    background-color: transparent;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: ${props => props.width};
`

export const HeaderMenu = styled(Menu)`
    .MuiPaper-root {
        background-color: ${props => props.theme.colors.surface};
        color: ${props => props.theme.colors.OnSurfaceVariant};
    }
`

export const FontDiv = styled.div`
    font-family: ${props => props.theme.typography.body.fontFamily};

        @media ${device.MobileS} {
            font-size: ${props => props.theme.size(2) + 2}px;
        }
        @media ${device.MobileM} {
            font-size: ${props => props.theme.size(2) + 2}px;
        }
        @media ${device.MobileL} {
            font-size: ${props => props.theme.size(3) + 2}px;
        }
        @media ${device.Tablet} { 
            font-size: ${props => props.theme.size(5) + 2}px;
        }
        @media ${device.Laptop} { 
            font-size: ${props => props.theme.size(5) + 2}px;
        }
        @media ${device.LaptopL} {
            font-size: ${props => props.theme.size(6) + 2}px;
        }
        @media ${device.Desktop} { 
            font-size: ${props => props.theme.size(7) + 2}px;
        }
`