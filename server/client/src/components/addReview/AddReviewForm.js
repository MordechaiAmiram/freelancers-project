import React from 'react'
import './addReview.css'
import AccordionDepthPanel from '../AccordionDepthPanel';

function AddReviewForm({ textProps, handleClick, handleChange, value }) {
    return (
        <div>
            <AccordionDepthPanel
                textProps={textProps}
                handleChange={handleChange}
                value={value}
                handleClick={handleClick}
            />
        </div>
    )
}

export default AddReviewForm