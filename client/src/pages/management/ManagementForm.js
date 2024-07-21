import React from 'react'
import BasicTable from '../../components/table/BasicTable'
import './management.css'
import EnhancedTable from '../../components/EnhancedTable'

function ManagementForm({ usersOnHold, handleConfirm, sumOfFreelancers, sumOfUsers, handleUsersOnHold, allUsers, handleBlock }) {
    return (
        <div className='management-page min-height-container page-background-color'>
            <div className='max-width-container'>
                <div className='statistics'>
                    {`מספר משתמשים רשומים: ${sumOfUsers}  
                מתוכם פרילנסרים : ${sumOfFreelancers}`}
                </div>
                <div>
                    {usersOnHold?.length > 0 &&
                    <><b>ממתינים לאישור</b>
                        <BasicTable
                            usersOnHold={usersOnHold}
                            handleConfirm={handleConfirm}
                            handleUsersOnHold={handleUsersOnHold}
                        /></>}
                </div>
                {/* <div>דיווחים</div> */}
                {allUsers && <div className='all-users'>
                    <EnhancedTable
                        allUsers={allUsers}
                        handleBlock={handleBlock}
                    />
                </div>}
            </div>
        </div>
    )
}

export default ManagementForm