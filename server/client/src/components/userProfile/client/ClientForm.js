import { Button } from '@mui/material'
import React from 'react'

function ClientForm({ profile, handleLogOut }) {
    return (
        <>
            <div>{`שם: ${profile.firstName} ${profile.lastName}`}</div>
            <div>{`דוא"ל: ${profile.email}`}</div>
            <div>{`טלפון: ${profile.phone}`}</div>
            <div>{`סוג חשבון: לקוח`}</div>
            <Button>עריכת פרופיל</Button>
            <Button onClick={handleLogOut}>יציאה</Button>
            <Button>מחיקת חשבון</Button>
        </>
    )
}

export default ClientForm