import { Button, Rating } from '@mui/material'
import React from 'react'

function ReviewForm({ review, handleDelete }) {
    const { firstName, lastName, rating, text, date } = review
    const isAdmin = JSON.parse(localStorage.getItem('currentUser'))?.isAdmin
    const splitDate = date.split('T')
    return (
        <div className='review'>
            {isAdmin === 1 &&
                <Button onClick={handleDelete}>מחק</Button>
            }
            <div>{`נכתבה על ידי: ${firstName} ${lastName}`} <br />
                {`בתאריך: ${splitDate[0]}`} <br />
                {text} <br />
                <Rating name="read-only" value={rating} readOnly />
            </div>
        </div>
    )
}

export default ReviewForm