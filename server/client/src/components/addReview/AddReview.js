import React, { useState } from 'react'
import AddReviewForm from './AddReviewForm'
import useInput from '../../hooks/useInput'
import api from '../../services/BaseURL'

function AddReview({ freelanceId }) {
    const textProps = useInput()
    // const [rating, setRating] = useState(0)

    const [value, setValue] = useState(0);

    const handleChange = (newValue) => {
        setValue(newValue)
    }

    const handleClick = async () => {
        try {
            const { data } = api.post('/reviews',
                {
                    text: textProps.value,
                    rating: '',
                    reviewerId: '',
                    freelanceId: freelanceId
                })
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <>
            <AddReviewForm
                freelanceId={freelanceId}
                textProps={textProps}
                handleClick={handleClick}
                handleChange={handleChange}
                value={value}
            />
        </>
    )
}

export default AddReview