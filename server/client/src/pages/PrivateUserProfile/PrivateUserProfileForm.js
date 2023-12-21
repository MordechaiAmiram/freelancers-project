import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import CategoriesNavbar from '../../components/navbar/CategoriesNavbar'
import './privateUserProfile.css'
import { Button } from '@mui/material'
function PrivateUserProfileForm({ profile , handleLogUot}) {
  return (
    <div>
      <Navbar />
      <CategoriesNavbar />
      <div>
        <div className='profile-picture'></div>
        <div>{`שם: ${profile.first_name} ${profile.last_name}`}</div>
        <div>{`דוא"ל: ${profile.email}`}</div>
        <div>{`טלפון: ${profile.phone}`}</div>
        {profile.freelance_id &&
          <>
            <div>{`עיר: ${profile.city}`}</div>
            <div>{`רחוב: ${profile.street} ${profile.building}/${profile.suite}`}</div>
            <div>הודעות</div>
            <div> הזמנות</div>
            <div>מי צפה בי</div>
          </>}
        <div>{`סוג חשבון: ${!profile.account_type ? 'לקוח' : profile.is_admin ? 'מנהל' : profile.account_type}`}</div>
        <Button>עריכת פרופיל</Button>
        <Button onClick={handleLogUot}>יציאה</Button>
        <Button>מחיקת חשבון</Button>
      </div>
    </div>
  )
}

export default PrivateUserProfileForm