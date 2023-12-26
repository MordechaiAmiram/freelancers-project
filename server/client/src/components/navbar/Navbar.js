import React from 'react'
import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    const profile = JSON.parse(localStorage.getItem('currentUser'))
    return (
        <>
            <div className='up-bar'>
                {!profile &&
                    <>
                        <div><span className='hello'>שלום אורח</span>
                            <Link className='link'
                                component={RouterLink} to={'/sign-up'}>הרשמה</Link>
                            <Link className='link'
                                component={RouterLink} to={'/log-in'}>כניסה</Link>
                        </div>
                    </>}
                {profile &&
                    <div><span className='hello' >{`שלום ${profile.firstName}`}</span>
                        <Link className='link'
                            component={RouterLink} to={'/my-profile/:userId'}>הפרופיל שלי</Link>
                    </div>
                }
                {profile?.isAdmin &&
                    <Link className='link' component={RouterLink} to={'/management'}>ניהול</Link>
                }
                <Link sx={{ position: 'relative', marginLeft: 0 }} component={RouterLink} to={'/'}>דף הבית</Link>
            </div>
        </>
    )
}

export default Navbar