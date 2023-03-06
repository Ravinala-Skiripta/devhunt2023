import React from "react"
import Image from "next/image"
import Link from "next/link"
import { HeaderWrapper, HeaderBox, HeaderMenu, FontDiv } from "./header.style"
import Space from "../space/space"
import StyledDrawer from "../drawer/styledDrawer"
import Avatar from '@mui/material/Avatar'
import AvatarUser from '@/components/avatar/avatar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LogoutIcon from '@mui/icons-material/Logout'
import { Tooltip, Menu, MenuItem, Divider } from "@mui/material"
import { AuthService } from "../../../service/auth-service"
import { Router } from "react-router-dom"


export interface IHeader {
    width?: number ;
    props?: any;
    theme?: any;
    token?: any;
}

const Header: React.FC<IHeader> = ( props : any ) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>
        <HeaderWrapper>
            <HeaderBox>
                <StyledDrawer />
            </HeaderBox>
            <HeaderBox>
                <Tooltip title="Account settings" >
                    <HeaderBox>
                        <HeaderBox onClick={handleClick}>
                            <AvatarUser size='small' image={''} shape='round' />
                            <ExpandMoreIcon />
                        </HeaderBox>
                        {/* <Avatar sx={{ bgcolor: "red"}}>B</Avatar> */}
                        <Space size={2} height={0} />
                        <HeaderBox>
                          <FontDiv>
                            {/* {console.log(props.token.username)} */}
                            {props.token.username}
                          </FontDiv>
                        </HeaderBox>
                        <Space size={2} height={0} />
                    </HeaderBox>
                </Tooltip>
            </HeaderBox>
        <HeaderMenu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
        >
        <MenuItem onClick={handleClose}>
          <HeaderBox>
            <HeaderBox>
              {/* <AvatarUser size='small' image={''} shape='round' /> */}
              <Space size={1} height={0} />
              <AccountCircleIcon sx={{ fontSize: 32}}/>
            </HeaderBox>
              <Space size={2} height={0} />
            <FontDiv>
              Profile
            </FontDiv>  
          </HeaderBox>
        </MenuItem>
        <MenuItem onClick={() => {
            handleClose();
            props.props();
        }}>
          <HeaderBox>
            <Space size={1} height={0} />
            <HeaderBox>{ props.theme.name === 'dark-mode' ? <HeaderBox> <DarkModeIcon sx={{fontSize: 32}}/> </HeaderBox> : <HeaderBox> <LightModeIcon sx={{fontSize: 32}} /> </HeaderBox> }</HeaderBox>
              <Space size={3} height={0} />
            <HeaderBox>{ props.theme.name === 'light-mode' ? <FontDiv> Light </FontDiv> : <FontDiv> Dark </FontDiv> }</HeaderBox>
          </HeaderBox>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => {
            handleClose();
            AuthService.logout();
            window.location.reload();
        }}>
          <HeaderBox>
            <Space size={1} height={0} />
            <LogoutIcon sx={{ fontSize: 32}}/>
          </HeaderBox>
          <Space size={3} height={0} />
          <FontDiv>
              Log Out
          </FontDiv> 
        </MenuItem>
      </HeaderMenu>
        </HeaderWrapper>
        </>
    );
}

export default Header