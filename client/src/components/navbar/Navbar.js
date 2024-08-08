import React, { useContext, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import './navbar.css'
import SearchField from '../searchField/SearchField'
import SideBarForm from '../sideBar/SideBarForm'
import { userContext } from '../../App'
import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { useLogout } from '../../hooks/useLogout'

function Navbar() {
    const { currentUser } = useContext(userContext)
    const [anchorElUser, setAnchorElUser] = useState(null);
    const logout = useLogout()

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
        <>
            <SideBarForm profile={currentUser} />
            <div className='nav-bar-wrapper'>
                <div className='up-bar max-width-container'>
                    {!currentUser &&
                        <>
                            <div className='right-bar'>
                                <div className='hello'>
                                    שלום אורח
                                </div>
                                <div className='nav-item'>
                                    <RouterLink className='link'
                                        to={'/sign-up'}>הרשמה</RouterLink></div>
                                <div className='nav-item'>
                                    <RouterLink className='link'
                                        to={'/log-in'}>כניסה</RouterLink>
                                </div>
                            </div>
                            <div className='search-bar'><SearchField /></div>
                            <div className='left-bar'>
                                <div className='nav-item'>
                                    <RouterLink className='link home-link'
                                        to={'/'}>Freeלַאנְ"שׂ</RouterLink>
                                </div>
                            </div>
                        </>
                    }
                    {currentUser &&
                        <>
                            <div className='right-bar'>
                                <div className='hello'>
                                    {`שלום ${currentUser.firstName}`}
                                </div>
                                <div className='nav-item'>
                                <Box sx={{ flexGrow: 0 }}>
                                    <IconButton
                                        onClick={handleOpenUserMenu} 
                                        sx={{ p: 0 }}>
                                        <Avatar>{currentUser.firstName[0]}</Avatar>
                                    </IconButton>
                                    <Menu
                                      sx={{ mt: '45px' }}
                                      id="menu-appbar"
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
                                        <RouterLink className='link'
                                                    to={`/my-profile/${currentUser.userId}`}>
                                            <MenuItem onClick={handleCloseUserMenu}>
                                                 <Typography textAlign="center">פרופיל</Typography>
                                            </MenuItem>
                                        </RouterLink>
                                        <MenuItem onClick={() => {
                                            handleCloseUserMenu()
                                            logout()
                                        }}>
                                                 <Typography textAlign="center">יציאה</Typography>
                                        </MenuItem>
                                    </Menu>
                                </Box>
                                </div>
                                {currentUser?.isAdmin === 1 &&
                                    <div className='nav-item'>
                                        <RouterLink className='link' to={'/management'}>ניהול</RouterLink>
                                    </div>
                                }
                            </div>
                            <div className='search-bar'><SearchField /></div>
                            <div className='left-bar'>
                                <div className='nav-item'>
                                    <RouterLink className='link home-link'
                                        to={'/'}>Freeלַאנְ"שׂ</RouterLink>
                                </div>
                            </div>
                        </>}
                </div>
                <Divider />
            </div>
        </>
    )
}

export default Navbar