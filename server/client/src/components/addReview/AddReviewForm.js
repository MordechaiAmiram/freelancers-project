import React from 'react'
import BasicRating from '../rating/BasicRating'
import { Button, TextareaAutosize } from '@mui/material'

function AddReviewForm({ freelanceId, value, handleChange }) {
    return (
        <div>
            <b>הוסף ביקורת</b>
            <BasicRating freelanceId={freelanceId} />
            <TextareaAutosize
                aria-label="empty textarea"
                minRows={5}
                placeholder="הוסף ביקורת"
                value={value}
                onChange={handleChange}
                 />
                 <Button>שלח</Button>
        </div>
    )
}

export default AddReviewForm