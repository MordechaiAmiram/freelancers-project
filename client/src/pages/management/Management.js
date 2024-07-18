import React, { useState } from 'react'
import ManagementForm from './ManagementForm'
import useFetch from '../../hooks/useFetch'
import api from '../../services/BaseURL'

function Management() {
    const [usersOnHold, setUsersOnHold] = useFetch('/users/on-hold')
    const [sumOfFreelancers] = useFetch('/freelancers/sum')
    const [sumOfUsers] = useFetch('/users/sum')
    const [allUsers] = useFetch('/management/users')

    const handleUsersOnHold = (data) => {
        data.forEach((element, index) => {
            if (element.value.status === 201) {
                setUsersOnHold((prev) => {
                    const newUsers = [...prev]
                    newUsers.splice(index, 1)
                    return newUsers
                })
            }
        })
    }
    const handleBlock = async (selectedUsers)=>{
        if (selectedUsers.length <= 0) return

        const promises = []
        selectedUsers.forEach(el => {
            const promise = api.put('/users',
                {
                    userId: el,
                    isConfirmed: 0
                })
            promises.push(promise)
        });
        
        try {
            const data = await Promise.allSettled(promises)
            console.log(data)
            // handleUsersOnHold(data)
            // setChecked(prev => {
            //     return prev.map(el => el = false)
            // })
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <ManagementForm
            usersOnHold={usersOnHold}
            handleUsersOnHold={handleUsersOnHold}
            sumOfFreelancers={sumOfFreelancers}
            sumOfUsers={sumOfUsers}
            allUsers={allUsers}
            handleBlock={handleBlock}
        />
    )
}

export default Management