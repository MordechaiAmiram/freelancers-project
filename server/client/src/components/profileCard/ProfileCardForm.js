import React from 'react'
import StarIcon from '@mui/icons-material/Star'; import './profileCard.css'

function ProfileCardForm({ name, rating, text }) {
  return (
    <div class="card-container">
      <span class="pro">PRO</span>
      <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
      <h3>רחל כהן</h3>
      <div>{'(4.8)'}<StarIcon /></div>
      <p>בניית אתרים מקצה לקצה  <br />ופתרון בעיות בתכנות </p>
      <div class="buttons">
        <button class="primary">
          ראה יותר
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