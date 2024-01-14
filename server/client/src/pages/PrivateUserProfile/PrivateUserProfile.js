import React, { useContext } from 'react'
import PrivateUserProfileForm from './PrivateUserProfileForm'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';

function PrivateUserProfile() {
  const navigate = useNavigate()
  const { currentUser, setCurrentUser } = useContext(userContext)

  const handleLogOut = () => {
    localStorage.setItem('currentUser', JSON.stringify(""))
    setCurrentUser('')
    navigate('/')
  }
  return (
    <>
      {currentUser && <PrivateUserProfileForm
        profile={currentUser}
        handleLogOut={handleLogOut}
      />}
    </>
  )
}

export default PrivateUserProfile