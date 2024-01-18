import React from 'react'
import BasicTable from '../table/BasicTable'
import './management.css'
import EnhancedTable from '../EnhancedTable'

function ManagementForm({ usersOnHold, handleConfirm, sumOfFreelancers, sumOfUsers, handleUsersOnHold, allUsers, handleBlock }) {
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
            {allUsers && <div className='all-users'>
                <EnhancedTable
                    allUsers={allUsers}
                    handleBlock={handleBlock}
                />
            </div>}
        </>
    )
}

export default ManagementForm