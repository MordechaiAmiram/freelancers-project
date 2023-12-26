import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    const profile = JSON.parse(localStorage.getItem('currentUser'))
    return (
        <>
            <div className='up-bar'>
                {!profile &&
                    <div><span className='hello'>שלום אורח</span>
                        <RouterLink className='link'
                            to={'/sign-up'}>הרשמה</RouterLink>
                        <RouterLink className='link'
                            to={'/log-in'}>כניסה</RouterLink>
                        <RouterLink className='link home-link' to={'/'}>Freeלאנ"ש</RouterLink>
                    </div>
                }
                {profile &&
                    <div><span className='hello' >{`שלום ${profile.firstName}`}</span>
                        <RouterLink className='link'
                            to={'/my-profile/:userId'}>הפרופיל שלי</RouterLink>
                        <RouterLink className='link home-link' to={'/'}>Freeלאנ"ש</RouterLink>
                    </div>
                }
                {profile?.isAdmin &&
                    <>
                        <RouterLink className='link' to={'/management'}>ניהול</RouterLink>
                        <RouterLink className='link home-link' to={'/'}>Freeלאנ"ש</RouterLink>
                    </>
                }
            </div>
        </>
    )
}

export default Navbar