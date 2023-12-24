import { Button } from '@mui/material'
import React from 'react'

function FreelanceForm({ profile, handleLogOut }) {
    return (
        <>
            <div>
                <div className='profile-picture'></div>
                <div>{`שם: ${profile.first_name} ${profile.last_name}`}</div>
                <div>{`דוא"ל: ${profile.email}`}</div>
                <div>{`טלפון: ${profile.phone}`}</div>
                <div>{`עיר: ${profile.city}`}</div>
                <div>{`רחוב: ${profile.street} ${profile.building}/${profile.suite}`}</div>
                <div>הודעות</div>
                <div> הזמנות</div>
                <div>מי צפה בי</div>
                <div>{`סוג חשבון: ${profile.account_type}`}</div>
                <Button>עריכת פרופיל</Button>
                <Button onClick={handleLogOut}>יציאה</Button>
                <Button>מחיקת חשבון</Button>
            </div>
        </>
    )
}

export default FreelanceForm