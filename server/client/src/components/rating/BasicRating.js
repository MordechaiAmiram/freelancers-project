import React from 'react'
import BasicRatingForm from './BasicRatingForm'

function BasicRating({ handleChange, value }) {


    return (
        <BasicRatingForm
            value={value}
            handleChange={handleChange}
        />
    )
}

export default BasicRating