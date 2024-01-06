import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';
import './sideBar.css'
import SearchField from '../searchField/SearchField'

function SideBarForm({ profile }) {
  return (
    <div className='side-bar'>
      {!profile &&
        <>
          <div className='header'>
            {/* <div className='hello'>
              שלום אורח
            </div> */}
            {/* <div className='nav-item'>
              <RouterLink className='link'
                to={'/sign-up'}>הרשמה</RouterLink></div> */}
            {/* <div className='nav-item'>
              <RouterLink className='link'
                to={'/log-in'}>כניסה</RouterLink>
            </div> */}
          </div>
          <div className='search-side-bar'><SearchField /></div>
          {/* <div className='left-bar'>
            <div className='nav-item'>
              <RouterLink className='link home-link'
                to={'/'}>Freeלאנ"ש</RouterLink>
            </div> 
          </div> */}
          <div className='slider'><DensityMediumRoundedIcon /></div>
        </>
      }
    </div>
  )
}

export default SideBarForm