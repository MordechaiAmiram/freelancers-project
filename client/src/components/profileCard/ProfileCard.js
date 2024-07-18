import React from 'react'
import ProfileCardForm from './ProfileCardForm'

function ProfileCard({ profile }) {
  return (
    <>
      <ProfileCardForm
        profile={profile}
      />
    </>
  )
}

export default ProfileCard