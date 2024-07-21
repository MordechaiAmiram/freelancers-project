import React, { useState } from 'react'
import ManagementForm from './ManagementForm'
import useFetch from '../../hooks/useFetch'
import api from '../../services/BaseURL'

function Management() {
    const [usersOnHold, setUsersOnHold] = useFetch('/users/on-hold')
    const [sumOfFreelancers] = useFetch('/freelancers/sum')
    const [sumOfUsers] = useFetch('/users/sum')
    const [allUsers] = useFetch('/management/users')

    const handleUsersOnHold = (toConfirm) => {
        console.log("handleUsersOnHold" , toConfirm);
        const set = new Set([...toConfirm])
        usersOnHold.forEach(el => el.isConfirmed = 1)
        setUsersOnHold(prev => {
            return usersOnHold.filter(user => !set.has(user.userId))
        })
    }
    
    const handleBlock = async (selectedUsersIds)=>{
        if (selectedUsersIds.length <= 0) return
        const set = new Set([...selectedUsersIds])
        setUsersOnHold((prev) =>{
            const usersToHold = allUsers.filter(user => set.has(user.userId))
            usersToHold.forEach(el => el.isConfirmed = 0)
            return [...prev, ...usersToHold]
        })

        const promises = []
        selectedUsersIds.forEach(el => {
            const promise = api.put('/users',
                {
                    userId: el,
                    isConfirmed: 0
                })
            promises.push(promise)
        });
        
        try {
            const data = await Promise.allSettled(promises)
            console.log("promises bloked", data)
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