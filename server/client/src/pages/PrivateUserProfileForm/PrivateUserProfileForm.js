import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import CategoriesNavbar from '../../components/navbar/CategoriesNavbar'
import './privateUserProfile.css'
function PrivateUserProfileForm() {
  return (
    <div>
      <Navbar />
      <CategoriesNavbar />
      <div>
        <div className='profile-picture'></div>
        <div>שם</div>
        <div>עריכת פרופיל</div>
        <div>הודעות</div>
        <div> הזמנות</div>
        <div>מי צפה בי</div>
        <div>סוג חשבון</div>
        <div>יציאה</div>
        <div>מחיקת חשבון משתמש</div>
      </div>
    </div>
  )
}

export default PrivateUserProfileForm