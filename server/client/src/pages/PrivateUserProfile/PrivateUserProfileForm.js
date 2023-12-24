import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import CategoriesNavbar from '../../components/navbar/CategoriesNavbar'
import './privateUserProfile.css'
import Admin from '../../components/userProfile/admin/Admin'
import Freelance from '../../components/userProfile/freelance/Freelance'
import Client from '../../components/userProfile/client/Client'
function PrivateUserProfileForm({ profile, handleLogOut }) {
  const { is_admin, account_type } = profile
  return (
    <>
      <Navbar />
      <CategoriesNavbar />
      {is_admin ?
        <Admin
          profile={profile}
          handleLogOut={handleLogOut}
        /> :
        account_type ?
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