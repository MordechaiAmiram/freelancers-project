import React from 'react'
import BasicTable from '../../table/BasicTable'
import { Button } from '@mui/material'

function AdminForm({ handleLogOut, usersOnHold, handleConfirm, sumOfFreelancers, sumOfUsers, handleUsersOnHold }) {

  return (
    <>
      <div><b>סטטיסטיקה</b> <br />
        {`מספר משתמשים רשומים: ${sumOfUsers} `}
        {`מתוכם פרילנסרים : ${sumOfFreelancers}`}
      </div>
      <div><b>ממתינים לאישור</b>
        {usersOnHold?.length > 0 &&
          <BasicTable
            usersOnHold={usersOnHold}
            handleConfirm={handleConfirm}
            handleUsersOnHold={handleUsersOnHold}
          />}
      </div>
      {/* <div>דיווחים</div> */}
      <Button onClick={handleLogOut}>יציאה</Button>
    </>
  )
}

export default AdminForm