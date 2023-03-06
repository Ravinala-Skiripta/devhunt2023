import styled, {DefaultTheme} from "styled-components";
import {Shape, Size, } from "./avatar";
import Image from "next/image";
import { device } from "@/assets/display/screensize";
import PersonIcon from '@mui/icons-material/Person';

interface IImageStyled{
    size: Size
    shape: Shape
}

const handleShape = (shape: Shape, theme: DefaultTheme) => {
    switch (shape){
        case "round":
            return 'round'
        case "square":
            return 'square'
        default:
            return '50px'
    }
}



export const ImageStyled = styled(Image)<IImageStyled>`
    border: solid;
    object-fit: cover;
`

export const StyledIcon = styled(PersonIcon)`
    
    @media ${device.MobileS} {
        font-size: 22px !important;
    }
    @media ${device.MobileM} {
        font-size: 24px !important;
    }
    @media ${device.MobileL} {
        font-size: 26px !important;
    }
    @media ${device.Tablet} {
        font-size: 28px !important;
    }
    @media ${device.Laptop} {
        font-size: 30px !important;
    }
    @media ${device.LaptopL} {
        font-size: 32px !important;
    }
    @media ${device.Desktop} {
        font-size: 34px !important;
    }

`
