import React from 'react'
import BasicRatingForm from './BasicRatingForm'

function BasicRating() {
    const [value, setValue] = React.useState(0);
    
    return (
        <BasicRatingForm
            value={value}
            setValue={setValue}
        />
    )
}

export default BasicRating