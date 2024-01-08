import React, { useState } from 'react'
import AddReviewForm from './AddReviewForm'
import useInput from '../../hooks/useInput'
import api from '../../services/BaseURL'

function AddReview({ freelanceId }) {
    const reviewerId = JSON.parse(localStorage.getItem('currentUser')).userId
    const [addReview, setAddReview] = useState(true)
    const textProps = useInput('')

    const [rating, setRating] = useState(0)

    const handleChange = (newValue) => {
        setRating(newValue)
    }

    const handleAddReview = () =>{
        setAddReview(!addReview)
    }

    const handleClick = async () => {
        try {
            const review = {
                text: textProps.value,
                rating: rating,
                reviewerId: reviewerId,
                freelanceId: freelanceId
            }
            const { data } = await api.post('/reviews', review)
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <AddReviewForm
                freelanceId={freelanceId}
                textProps={textProps}
                handleClick={handleClick}
                handleChange={handleChange}
                addReview={addReview}
                handleAddReview={handleAddReview}
                value={rating}
            />
        </>
    )
}

export default AddReview