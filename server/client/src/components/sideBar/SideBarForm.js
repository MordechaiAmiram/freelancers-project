import React, { useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './sideBar.css'
import SearchField from '../searchField/SearchField'

function SideBarForm({ profile }) {
  const [showItmes, setShowItems] = useState(false)
  const handleShowItems = () => {
    setShowItems(true)
  }
  const HandleHideItmes = () => {
    setShowItems(false)
  }

  return (
    <>
      <div className='side-bar'>
        <div className='header-title'>
          <h3><RouterLink className='link home-link-side-bar'
            to={'/'}>Freeלאנ"ש</RouterLink></h3>
        </div>
        <div className='slider-btn' onClick={handleShowItems}><DensityMediumRoundedIcon /></div>
        <div className='search-side-bar'><SearchField /></div>

      </div>
      {
        <div className={`side-bar-items ${showItmes ? 'active' : ''}`}>
          <div className='close-btn' onClick={HandleHideItmes}><CloseRoundedIcon /></div>

          {!profile && <>
            <div className='side-bar-item' >
              <RouterLink className='link'
                to={'/sign-up'}>הרשמה</RouterLink>
            </div>
            <div className='side-bar-item'>
              <RouterLink className='link'
                to={'/log-in'}>כניסה</RouterLink>
            </div>
          </>}
          {profile && <>
            <div className='hello-side-bar'>{`שלום ${profile.firstName}`}</div>
            <div className='side-bar-item'>
              <RouterLink className='link'
                to={'/my-profile/:userId'}>הפרופיל שלי</RouterLink>
            </div>
            {profile?.isAdmin === 1 &&
              <div className='side-bar-item'>
                <RouterLink className='link' to={'/management'}>ניהול</RouterLink>
              </div>
            }

          </>}

        </div>}
    </>
  )
}

export default SideBarForm