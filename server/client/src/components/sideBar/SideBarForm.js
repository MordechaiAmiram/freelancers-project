import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';
import './sideBar.css'
import SearchField from '../searchField/SearchField'

function SideBarForm({ profile }) {
  return (
    <>
      <div className='side-bar'>
        <div className='header-title'>
          <h3><RouterLink className='link home-link-side-bar'
            to={'/'}>Freeלאנ"ש</RouterLink></h3>
        </div>
        <div className='search-side-bar'><SearchField /></div>

        <div className='slider-btn'><DensityMediumRoundedIcon /></div>
      </div>
    </>
  )
}

export default SideBarForm