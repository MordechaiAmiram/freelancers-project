import React from 'react'
import AdminForm from './AdminForm'
import useFetch from '../../../hooks/useFetch'
import api from '../../../services/BaseURL'

function Admin({ profile }) {
  const usersOnHold = useFetch('/freelancers/on-hold')
  const sumOfFreelancers = useFetch('/freelancers/sum')
  const sumOfUsers = useFetch('/users/sum')
  
  const handleConfirm = (toConfirm) => {
    toConfirm.forEach(async element => {
      try {
        const { data } = await api.put('/freelance',
          {
            freelanceId: element,
            isConfirmed: 1
          })
      } catch (err) {
        console.log(err.message);
      }
    });
  }
  return (
    <>
      <AdminForm
        profile={profile}
        usersOnHold={usersOnHold}
        handleConfirm={handleConfirm}
        sumOfFreelancers={sumOfFreelancers}
        sumOfUsers={sumOfUsers}
      />
    </>
  )
}

export default Admin