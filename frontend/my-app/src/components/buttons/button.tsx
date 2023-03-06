import { Button } from "@mui/material";
import React from "react";
import { BoxStyled } from "./button.style";

export interface IButton{
    text?: string,
    color?: any,
    onClick?: (val?: any) => void,
    
}

const StyledButton: React.FC<IButton> = ({ text, color, onClick}) => {

    return (
            <BoxStyled onClick={onClick} color={color} >
                <Button>
                    {text}
                </Button>
            </BoxStyled>
    )
}

export default StyledButton