import React, { useContext, useState } from 'react'
import AddReviewForm from './AddReviewForm'
import useInput from '../../hooks/useInput'
import api from '../../services/BaseURL'
import { userContext } from '../../App'

function AddReview({ freelanceId, handleUpdateReviews }) {
    const { currentUser } = useContext(userContext)
    const reviewerId = currentUser?.userId
    const textProps = useInput('')

    const [rating, setRating] = useState(1)

    const handleChange = (newValue) => {
        setRating(newValue)
    }

    const handleClick = async () => {
        if (!textProps.value || !rating) return
        try {
            const review = {
                text: textProps.value,
                rating: rating,
                reviewerId: reviewerId,
                freelanceId: freelanceId,
            }
            const { data } = await api.post('/reviews', review)
            if (data) {
                const review = {
                    firstName: currentUser.firstName,
                    lastName: currentUser.lastName,
                    rating: data,
                    text: textProps.value,
                    date: new Date().toJSON()
                }
                handleUpdateReviews(review)
            }
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <>
            <AddReviewForm
                textProps={textProps}
                handleClick={handleClick}
                handleChange={handleChange}
                value={rating}
            />
        </>
    )
}

export default AddReview