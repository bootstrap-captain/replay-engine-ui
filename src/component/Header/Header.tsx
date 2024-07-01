import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AppsIcon from '@mui/icons-material/Apps';
import {stringAvatar} from "../../utils/iconColor";
import {menus, userSetting} from "../../config/menuConfig";
import {useNavigate} from 'react-router-dom';


/*如何设置二级路由*/
export default function Header() {

    const username = 'Erick Shu';

    const navigate = useNavigate();

    /*控制用户界面的*/
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleMenuClick = (path: string) => {
        return () => {
            console.log('path:', path)
            navigate(path, {
                replace: false,
                state: {}
            })
        }
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*1. 图案logo*/}
                    <AppsIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    {/*2. app文字*/}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Replay Engine Service
                    </Typography>

                    {/*3. 菜单列表,用几个Button表示*/}
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {menus.map((menu) => (
                            <Button
                                key={menu.name}
                                onClick={handleMenuClick(menu.path)}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {menu.name}
                            </Button>
                        ))}
                    </Box>


                    {/*4. 用户setting*/}
                    <Box sx={{flexGrow: 0}}>
                        {/*Tooltip:用户移动到这里时，提示信息*/}
                        <Tooltip title="Open Settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar {...stringAvatar(username)}></Avatar>
                            </IconButton>
                        </Tooltip>

                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            /* 是否打开setting*/
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {userSetting.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}