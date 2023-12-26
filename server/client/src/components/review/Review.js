import React from 'react'
import ReviewForm from './ReviewForm'
import api from '../../services/BaseURL'
function Review({ review }) {

    const handleDelete = async () => {
        try {
            const { data } = await api.delete('/reviews', {data: { reviewId: review.id }})
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <ReviewForm review={review} handleDelete={handleDelete} />
        </>
    )
}

export default Review