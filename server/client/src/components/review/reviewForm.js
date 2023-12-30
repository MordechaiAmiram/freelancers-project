import { Button, Rating } from '@mui/material'
import React from 'react'

function ReviewForm({ review, handleDelete }) {
    const { firstName, lastName, rating, text, date } = review
    const isAdmin = JSON.parse(localStorage.getItem('currentUser'))?.isAdmin
    
    return (
        <>
            {isAdmin && <Button onClick={handleDelete}>מחק</Button>}
            <div>{`ביקורת מאת: ${firstName} ${lastName}`} <br />
                {`נכתבה בתאריך: ${date}`} <br />
                {text} <br />
                <Rating name="read-only" value={rating} readOnly />
            </div>
        </>
    )
}

export default ReviewForm