import React from 'react'
import ReviewForm from './ReviewForm'
import api from '../../services/BaseURL'
function Review({ review, handleDeleteReview }) {

    return (
        <>
            <ReviewForm review={review} handleDeleteReview={handleDeleteReview} />
        </>
    )
}

export default Review