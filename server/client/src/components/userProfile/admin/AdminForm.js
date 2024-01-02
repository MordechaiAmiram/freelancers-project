import React from 'react'
import { Button } from '@mui/material'

function AdminForm({ handleLogOut, profile }) {

  return (
    <>
      <div>{`שם: ${profile.firstName} ${profile.lastName}`}</div>
      <div>{`דוא"ל: ${profile.email}`}</div>
      <div>{`טלפון: ${profile.phone}`}</div>
      <div>{`סוג חשבון: מנהל`}</div>
      <Button>עריכת פרופיל</Button>
      <Button onClick={handleLogOut}>יציאה</Button>
    </>
  )
}

export default AdminForm