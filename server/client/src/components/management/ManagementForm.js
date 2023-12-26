import React from 'react'
import BasicTable from '../table/BasicTable'

function ManagementForm({ usersOnHold, handleConfirm, sumOfFreelancers, sumOfUsers, handleUsersOnHold }) {
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
        </>
    )
}

export default ManagementForm