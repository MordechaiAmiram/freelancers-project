import React, { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import './navbar.css'
import SearchField from '../searchField/SearchField'
import SideBarForm from '../sideBar/SideBarForm'
import { userContext } from '../../App'
import { Avatar, Divider, IconButton } from '@mui/material'

function Navbar() {
    const { currentUser } = useContext(userContext)
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
                                    <RouterLink className='link'
                                        to={`/my-profile/${currentUser.userId}`}>
                                        <IconButton>
                                            <Avatar>{currentUser.firstName[0]}</Avatar>
                                        </IconButton>
                                    </RouterLink>
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