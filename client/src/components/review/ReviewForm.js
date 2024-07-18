import { Button, Rating } from '@mui/material'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import React, { useContext } from 'react'
import './review.css'
import { userContext } from '../../App';

function ReviewForm({ review, handleDeleteReview }) {
    const { firstName, lastName, rating, text, date } = review
    const { currentUser } = useContext(userContext)
    const isAdmin = currentUser?.isAdmin
    const splitDate = date.split('T')
    return (
        <div className='review'>
            {isAdmin === 1 &&
                <Button
                    onClick={() => handleDeleteReview(review.id)}
                >
                    <DeleteOutlineRoundedIcon />
                </Button>
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