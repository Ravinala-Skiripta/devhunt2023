import React from 'react'
import styled from 'styled-components'


export const ContainerCard =styled.div`
    display:flex;
    flex-direction:column;
    border:1px solid #d7eeff;
    border-radius: 9px;
    overflow:hidden;
    box-shadow: 5px 5px 3px -1px #b7b7b7;
    padding:16px;
    width:376px;
    height:156px;
    `;
export const CardHeader=styled.div`
    font-weight:500;
    font-size: 16px;
    line-height:normal;
`;
export const CardBody=styled.div`
    font-weight:normal;
    line-height:normal;
    font-size:13px;
    padding:6px 0;
    color:#78909c;
    flex:1;
`;
export const CardFooter=styled.div`
    display:flex;
    font-size: 16px;
`;
export const SmallAvatar=styled.img`
 height:16px;
 width:16px;
 border-radius:16.5px;
`;
