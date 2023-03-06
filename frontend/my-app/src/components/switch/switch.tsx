import React from 'react'
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from './switch.style';


export interface ISwitch {
    mode: () => void;
} 

const StyledSwitch: React.FC<ISwitch> = ({ mode }) => {
    return (
        <>
            <CheckBoxWrapper>
                <CheckBox id="checkbox" type="checkbox" onClick={mode}/>
                <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
        </>
    )
}

export default StyledSwitch