import React from "react";
import StyledSpace from "./space.style";

export interface ISpace {
    size: number;
    height: number;
}

const Space: React.FC<ISpace> = ({ size, height = 0 }) => {
    return <StyledSpace size={size} height={height} />
}

export default Space