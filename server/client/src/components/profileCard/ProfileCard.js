import React from 'react'
import ProfileCardForm from './ProfileCardForm'

function ProfileCard({ name, rating, text, freelanceId }) {
  return (
    <>
      <ProfileCardForm
        name={name}
        rating={rating}
        text={text}
        freelanceId={freelanceId}
      />
    </>
  )
}

export default ProfileCard