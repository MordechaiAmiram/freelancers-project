import React from 'react'
import ReviewForm from './ReviewForm'
function Review({ review, handleDeleteReview }) {

    return (
        <>
            <ReviewForm review={review} handleDeleteReview={handleDeleteReview} />
        </>
    )
}

export default Review