import React from 'react'
import './publicUserProfile.css'
import CategoriesNavbar from '../../components/navbar/CategoriesNavbar'
import Navbar from '../../components/navbar/Navbar'
import { Button } from '@mui/material'
function PublicUserProfileForm() {
    return (
        <>
            <Navbar />
            <CategoriesNavbar />
            <div className='profile-container'>
                <h2> כותרת אישית</h2>
                <div className='profile-picture'></div>
                <div className='profile-inner'>
                    <div className='name'><b>שם</b></div>
                    <div className='rating'><b>דירוג</b></div><br />
                    <div className='category'><b>מקצוע</b></div><br />
                    <div className='work-in-area'>מבצע/ת עבודות באזור: </div><br />
                    <div className='about'><b>עליי</b></div>
                    <Button className='contact' 
                    variant='contained' 
                    sx={{ width: 150 }}>צור קשר</Button>
                </div>
            </div>
            <div className='portfolio'>תיקיית עבודות</div>
            <div className='reviews'>ביקורות</div>
        </>
    )
}

export default PublicUserProfileForm