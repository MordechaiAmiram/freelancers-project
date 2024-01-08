import React from 'react'
import './addReview.css'
import BasicRating from '../rating/BasicRating'
import { Button, TextareaAutosize } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function AddReviewForm({ textProps, handleClick, handleChange, value, addReview, handleAddReview }) {
    return (

        <div>
            <div className={`add-review-container ${addReview ? 'active-review' : ''}`}>
                <div className='add-review-title' onClick={handleAddReview}>הוסף ביקורת</div>
                <BasicRating
                    handleChange={handleChange}
                    value={value}
                />
                <TextareaAutosize
                    aria-label="empty textarea"
                    minRows={8}
                    // sx={{innerWidth: '100%'}}
                    placeholder="הוסף ביקורת"
                    {...textProps}
                />
                <br />
                <Button onClick={handleClick}><SendOutlinedIcon /></Button>
            </div>
        </div>
    )
}

export default AddReviewForm