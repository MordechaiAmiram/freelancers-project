import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    const profile = JSON.parse(localStorage.getItem('currentUser'))
    return (
        <>
            <div className='up-bar'>
                {!profile &&
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
                        <div className='left-bar'>
                            <div className='nav-item'>
                                <RouterLink className='link home-link'
                                    to={'/'}>Freeלאנ"ש</RouterLink>
                            </div>
                        </div>
                    </>
                }
                {profile &&
                    <div className='right-bar'>
                        <div className='hello'>
                            {`שלום ${profile.firstName}`}
                        </div>
                        <div className='nav-item'>
                            <RouterLink className='link'
                                to={'/my-profile/:userId'}>הפרופיל שלי</RouterLink>
                        </div>
                        <div className='left-bar'>
                            <div className='nav-item'>
                                <RouterLink className='link home-link'
                                    to={'/'}>Freeלאנ"ש</RouterLink>
                            </div>
                        </div>
                        </div>
                }
                        {profile?.isAdmin &&
                            <>
                                <RouterLink className='link' to={'/management'}>ניהול</RouterLink>
                                <RouterLink className='link home-link' to={'/'}>Freeלאנ"ש</RouterLink>
                            </>
                        }
                    </div >
        </>
            )
}

            export default Navbar