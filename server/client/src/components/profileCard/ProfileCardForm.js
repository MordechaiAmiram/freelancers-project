import React from 'react'
import StarIcon from '@mui/icons-material/Star'; 
import './profileCard.css'
import { Link as LinkRouter } from 'react-router-dom'
import GetImage from '../GetImage';

function ProfileCardForm({ profile }) {
  const { firstName, lastName, title, rating, freelanceId, accountType, profileImageId } = profile
  return (

    <div className="card-container">
      
      {accountType && <span className="pro">PRO</span>}
            
      <GetImage imageId={profileImageId} width={150} className={'round'} />

      <h3>{firstName + ' ' + lastName}</h3>
      
      <h4 className='title'>{title}</h4>
      
      <div className='rating'>{rating ? `(${rating})` : '(0)'}<StarIcon sx={{color: 'gold'}} /></div>
      
      <LinkRouter
        to={`/profile/${freelanceId}`}
        state={profile}
        className="profile-card-btn"
      >
        ראה פרטים
      </LinkRouter>
    </div>
  )
}

export default ProfileCardForm