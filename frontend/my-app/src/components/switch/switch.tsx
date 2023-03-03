import React from 'react'
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from './switch.style';

export function StyledSwitch() {
    return (
        <>
            <CheckBoxWrapper>
                <CheckBox id="checkbox" type="checkbox" />
                <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
        </>
    )
}