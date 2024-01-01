import React from 'react'
import './addReview.css'
import BasicRating from '../rating/BasicRating'
import { Button, TextareaAutosize } from '@mui/material'

function AddReviewForm({ textProps, handleClick, handleChange, value }) {
    return (
        <div className='add-review-container'>
            <b>הוסף ביקורת</b>
            <BasicRating
                handleChange={handleChange}
                value={value}
            />
            <TextareaAutosize
                aria-label="empty textarea"
                minRows={8}
                placeholder="הוסף ביקורת"
                {...textProps}
            />
            <br />
            <Button onClick={handleClick}>שלח</Button>
        </div>
    )
}

export default AddReviewForm