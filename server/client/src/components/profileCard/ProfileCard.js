import React from 'react'
import ProfileCardForm from './ProfileCardForm'

function ProfileCard({ name, rating, text }) {
  return (
    <>
      <ProfileCardForm
        name={name}
        rating={rating}
        text={text}
      />
    </>
  )
}

export default ProfileCard