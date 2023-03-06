import styled from "styled-components";
import { device } from "./screensize";
import { Box } from "@mui/material";
import { IScreenSize } from "./screensize";

export const BackgroundBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.background};

    @media ${device.MobileS} {
        /* background-color: aliceblue; */
    }
    @media ${device.MobileM} {
        /* background-color: blue; */
    }
    @media ${device.MobileL} {
        /* background-color: white; */
    }
    @media ${device.Tablet} {
        /* background-color: whitesmoke; */
    }
    @media ${device.Laptop} {
        /* background-color: yellow; */
    }
    @media ${device.LaptopL} {
        /* background-color: yellowgreen; */
    }
    @media ${device.Desktop} {
        /* background-color: indigo; */
    }
`

export const RowBox = styled(Box)<IScreenSize>`
    flex: ${props => props.size};
    flex-direction: row;
    background-color: green;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const ColumnBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const UnStyledBox = styled(Box)`
    display: flex;
    width: 90%;
    padding: 0px 12px;

`