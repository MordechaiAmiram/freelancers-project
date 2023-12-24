import React from 'react'
import BasicRatingForm from './BasicRatingForm'
import api from '../../services/BaseURL'

function BasicRating({ freelanceId }) {
    const [value, setValue] = React.useState(0);

    const handleChange = async (newValue) => {
        try {
            setValue(newValue);
            // const { data } = await api.put('freelance/',
            //     {
            //         freelanceId: freelanceId,
            //         rating: newValue
            //     })
            //     console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <BasicRatingForm
            value={value}
            handleChange={handleChange}
        />
    )
}

export default BasicRating