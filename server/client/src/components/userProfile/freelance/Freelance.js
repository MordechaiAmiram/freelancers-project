import React from 'react'
import FreelanceForm from './FreelanceForm'

function Freelance({ profile, handleLogOut }) {
  return (
    <>
        <FreelanceForm 
            profile={profile}
            handleLogOut={handleLogOut}
        />
    </>
  )
}

export default Freelance