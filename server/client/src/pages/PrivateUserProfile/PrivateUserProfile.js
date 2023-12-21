import React from 'react'
import PrivateUserProfileForm from './PrivateUserProfileForm'
function PrivateUserProfile() {
  const profile = JSON.parse(localStorage.getItem('currentUser'))
  console.log(profile);
  return (
    <>
      <PrivateUserProfileForm profile={profile} />
    </>
  )
}

export default PrivateUserProfile