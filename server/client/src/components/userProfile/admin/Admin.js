import React from 'react'
import AdminForm from './AdminForm'
import useFetch from '../../../hooks/useFetch'

function Admin({ profile }) {
  const usersOnHold = useFetch('/freelancers/on-hold')
  return (
    <>
      <AdminForm
        profile={profile}
        usersOnHold={usersOnHold}
      />
    </>
  )
}

export default Admin