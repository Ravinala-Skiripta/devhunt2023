import React, {useState} from 'react';
import StyledButton from '../buttons/button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Space from '../space/space';
import { ContainerDrawer, ContentDrawer1,ButtonContainer } from './styledDrawer.style';

   
export interface ISidebar{
  width? :number,
  height? : number | string,
  onClick?: () => void
}


const StyledDrawer: React.FC<ISidebar> = ({width,height, onClick}) => {
  const [isDrawerOpen, setIsDrawerOpen]= useState<boolean>(false)

  return (
        <> 
            <Space size={2} height={0} />
            <StyledButton onClick={()=>setIsDrawerOpen(true)} text={'Menu'}/ >
                
            <Drawer
                anchor='left'
                open={isDrawerOpen}
                onClose={()=>setIsDrawerOpen(false)}
            >
                <ContainerDrawer>
                    <ContentDrawer1>
                        Content1
                        ocnofw
                        wfjijwf
                        hwfieo
                        hfwoeih
                    </ContentDrawer1>
                    <ContentDrawer1>
                        <ButtonContainer>
                            <StyledButton onClick={()=>setIsDrawerOpen(true)} text={'L1'}/ >
                                <Space size={0} height={1} />
                            <StyledButton onClick={()=>setIsDrawerOpen(true)} text={'L2'}/ >
                                <Space size={0} height={1} />
                            <StyledButton onClick={()=>setIsDrawerOpen(true)} text={'L3'}/ >
                                <Space size={0} height={1} />
                            <StyledButton onClick={()=>setIsDrawerOpen(true)} text={'M1'}/ >
                                <Space size={0} height={1} />
                            <StyledButton onClick={()=>setIsDrawerOpen(true)} text={'M2'}/ >
                        </ButtonContainer>
                    </ContentDrawer1>
                </ContainerDrawer>
            </Drawer>
        </>
  );
}

export default StyledDrawer