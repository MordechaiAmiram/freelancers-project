import React from 'react'
import BasicTable from '../../table/BasicTable'

function AdminForm({ profile, usersOnHold, handleConfirm, sumOfFreelancers, sumOfUsers }) {

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
          />}
      </div>
      <div>דיווחים</div>
    </>
  )
}

export default AdminForm