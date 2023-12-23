import React from 'react'

function ReviewForm({ review }) {
    const { firstName, lastName, rating, text, date } = review
    return (
        <>
            <div>{`ביקורת מאת: ${firstName} ${lastName}`} <br />
                {`נכתבה בתאריך: ${date}`} <br />
                {text} <br />
                {rating}
            </div>
        </>
    )
}

export default ReviewForm