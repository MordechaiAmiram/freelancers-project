import React from 'react'
import ReviewForm from './ReviewForm'

function Review({review}) {
    return (
        <>
            <ReviewForm review={review}/>
        </>
    )
}

export default Review