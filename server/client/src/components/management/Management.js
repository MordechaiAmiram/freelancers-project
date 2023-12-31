import React from 'react'
import ManagementForm from './ManagementForm'
import useFetch from '../../hooks/useFetch'

function Management() {
    const [usersOnHold, setUsersOnHold] = useFetch('/freelancers/on-hold')
    const [sumOfFreelancers] = useFetch('/freelancers/sum')
    const [sumOfUsers] = useFetch('/users/sum')

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

    return (
        <ManagementForm
            usersOnHold={usersOnHold}
            handleUsersOnHold={handleUsersOnHold}
            sumOfFreelancers={sumOfFreelancers}
            sumOfUsers={sumOfUsers}
        />
    )
}

export default Management