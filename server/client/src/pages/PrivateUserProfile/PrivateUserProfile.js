import React from 'react'
import PrivateUserProfileForm from './PrivateUserProfileForm'
import { useNavigate } from 'react-router-dom';

function PrivateUserProfile() {
  const navigate = useNavigate()
  const profile = JSON.parse(localStorage.getItem('currentUser'))

  const handleLogOut = () => {
    localStorage.setItem('currentUser', JSON.stringify(""))
    navigate('/')
  }
  return (
    <>
      <PrivateUserProfileForm
        profile={profile}
        handleLogOut={handleLogOut}
      />
    </>
  )
}

export default PrivateUserProfile