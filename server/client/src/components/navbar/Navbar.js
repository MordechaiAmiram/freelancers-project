import React from 'react'
import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <>
            <div className='up-bar'>
                <Link className='link'
                component={RouterLink} to={'/sign-up'}>הרשמה</Link>
                <Link className='link'
                component={RouterLink} to={'/log-in'}>כניסה</Link>
                 <Link className='link'
                component={RouterLink} to={'/my-profile/:userId'}>הפרופיל שלי</Link>
            </div>
        </>
    )
}

export default Navbar