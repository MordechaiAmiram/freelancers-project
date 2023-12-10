import React from 'react'
import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function CategoriesNavbar() {
    return (
        <div className='categories-navbar'>
            <Link className='link'
                component={RouterLink} to={'/'}>קטגוריה</Link>
            <Link className='link'
                component={RouterLink} to={'/'}>קטגוריה</Link>
            <Link className='link'
                component={RouterLink} to={'/'}>קטגוריה</Link>
            <Link className='link'
                component={RouterLink} to={'/'}>קטגוריה</Link>
            <Link className='link'
                component={RouterLink} to={'/'}>קטגוריה</Link>
            <Link className='link'
                component={RouterLink} to={'/'}>קטגוריה</Link>
            <Link className='link'
                component={RouterLink} to={'/'}>קטגוריה</Link>
            <Link className='link'
                component={RouterLink} to={'/'}>קטגוריה</Link>
        </div>
    )
}

export default CategoriesNavbar