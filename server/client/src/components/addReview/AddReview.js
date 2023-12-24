import React, { useState } from 'react'
import AddReviewForm from './AddReviewForm'

function AddReview({ freelanceId }) {
    const [value, setValue] = useState('')
    const handleChange = ({ target }) => {
        setValue(target.value)
    }

    
    return (
        <>
            <AddReviewForm
                freelanceId={freelanceId}
                value={value}
                handleChange={handleChange}
            />
        </>
    )
}

export default AddReview