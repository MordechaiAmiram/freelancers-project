import React from 'react'
import BasicRating from '../rating/BasicRating'
import { Button, TextareaAutosize } from '@mui/material'

function AddReviewForm({ freelanceId, textProps, handleClick, ratingValue, handleChange, value }) {
    return (
        <div>
            <b>הוסף ביקורת</b>
            <BasicRating
                handleChange={handleChange}
                value={value}
                freelanceId={freelanceId}
                ratingValue={ratingValue} />
            <TextareaAutosize
                aria-label="empty textarea"
                minRows={5}
                placeholder="הוסף ביקורת"
                {...textProps}
            />
            <Button onClick={handleClick}>שלח</Button>
        </div>
    )
}

export default AddReviewForm