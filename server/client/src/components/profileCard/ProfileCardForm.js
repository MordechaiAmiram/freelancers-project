import React from 'react'
import StarIcon from '@mui/icons-material/Star'; import './profileCard.css'
import { Link as LinkRouter } from 'react-router-dom'
import { Link } from '@mui/material';

function ProfileCardForm({ name, rating, text, freelanceId}) {
  return (
    <div className="card-container">
      <span className="pro">PRO</span>
      <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
      <h3>{name}</h3>
      <div>{rating ? `(${rating})` : '(0)'}<StarIcon /></div>
      <h4>{text}</h4>
      {/* <p>   <br /> </p> */}
      <div className="buttons">
        <button className="primary">
          <Link component={LinkRouter} to={`/profile/${freelanceId}`}>ראה יותר</Link>
        </button>
        {/* <button class="primary ghost">
          Following
        </button> */}
      </div>
      {/* <div class="skills">
        <h6>Skills</h6>
        <ul>
          <li>UI / UX</li>
          <li>Front End Development</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </div> */}
    </div>
  )
}

export default ProfileCardForm