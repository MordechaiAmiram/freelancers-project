import React from 'react'
import './sideBar.css'
function SideBarForm({profile}) {
  return (
    <div className='side-bar'>
      {!profile &&
        <>
          <div className='right-bar'>
            <div className='hello'>
              שלום אורח
            </div>
            <div className='nav-item'>
              <RouterLink className='link'
                to={'/sign-up'}>הרשמה</RouterLink></div>
            <div className='nav-item'>
              <RouterLink className='link'
                to={'/log-in'}>כניסה</RouterLink>
            </div>
          </div>
          <SearchField />
          <div className='left-bar'>
            <div className='nav-item'>
              <RouterLink className='link home-link'
                to={'/'}>Freeלאנ"ש</RouterLink>
            </div>
          </div>
        </>
      }
      </div>
  )
}

export default SideBarForm