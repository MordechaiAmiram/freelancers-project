import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import CategoriesNavbar from '../../components/navbar/CategoriesNavbar'
import './privateUserProfile.css'
import Admin from '../../components/userProfile/admin/Admin'
import Freelance from '../../components/userProfile/freelance/Freelance'
import Client from '../../components/userProfile/client/Client'
function PrivateUserProfileForm({ profile, handleLogOut }) {
  const { isAdmin, freelanceId } = profile
  return (
    <>
      <Navbar />
      <CategoriesNavbar />
      {isAdmin ?
        <Admin
          profile={profile}
          handleLogOut={handleLogOut}
        /> :
        freelanceId ?
          <Freelance
            profile={profile}
            handleLogOut={handleLogOut}
          /> :
          <Client
            profile={profile}
            handleLogOut={handleLogOut}
          />}
    </>
  )
}

export default PrivateUserProfileForm