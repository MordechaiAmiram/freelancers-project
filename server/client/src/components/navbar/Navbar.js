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
                        <Link className='link'
                            component={RouterLink} to={'/sign-up'}>הרשמה</Link>
                        <Link className='link'
                            component={RouterLink} to={'/log-in'}>כניסה</Link>
                    </>}
                {profile && <Link className='link'
                    component={RouterLink} to={'/my-profile/:userId'}>הפרופיל שלי</Link>}
                    {profile?.isAdmin && 
                    <Link className='link' component={RouterLink} to={'/management'}>ניהול</Link>
                    }
            </div>
        </>
    )
}

export default Navbar