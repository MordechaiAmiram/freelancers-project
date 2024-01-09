import { Button, Rating } from '@mui/material'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import React from 'react'
import './review.css'

function ReviewForm({ review, handleDelete }) {
    const { firstName, lastName, rating, text, date } = review
    const isAdmin = JSON.parse(localStorage.getItem('currentUser'))?.isAdmin
    const splitDate = date.split('T')
    return (
        <div className='review'>
            {isAdmin === 1 &&
                <Button onClick={handleDelete}><DeleteOutlineRoundedIcon /></Button>
            }
            <div>
                <div className='review-details'> {`נכתבה על ידי: ${firstName} ${lastName}`}</div>
                <div className='review-details'>{`בתאריך: ${splitDate[0]}`}</div>
                <div className='review-text'>{text}</div>
                <Rating name="read-only" value={rating} readOnly />
            </div>
        </div>
    )
}

export default ReviewForm