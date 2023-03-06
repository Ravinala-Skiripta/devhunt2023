import React from "react";
import DefaultAvatar from "../../../public/user.png"
import { ImageStyled , StyledIcon } from "./avatar.style";


export type Size = 'small' | 'medium' | 'large'
export type Shape = 'round' | 'square'

export interface IAvatar{
    size: Size,
    image: string,
    shape: Shape
}

const Avatar: React.FC<IAvatar> = ({ size= 'small', image, shape= 'round' }) => {
    return (
        <>
        {
            image !== "" ?
            <ImageStyled alt="Default Pic" src={image === "" ? DefaultAvatar : image} shape={shape} size={size}/> :
            <StyledIcon />
        }
        </>
    )
}

export default Avatar
