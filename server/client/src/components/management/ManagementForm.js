import React from 'react'
import BasicTable from '../table/BasicTable'
import './management.css'

function ManagementForm({ usersOnHold, handleConfirm, sumOfFreelancers, sumOfUsers, handleUsersOnHold }) {
    return (
        <>
            <div className='statistics'>
                {`מספר משתמשים רשומים: ${sumOfUsers}  
                מתוכם פרילנסרים : ${sumOfFreelancers}`}
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