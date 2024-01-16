import React from 'react'
import { Divider } from '@mui/material'
import Review from '../review/Review'
import './reviews.css'

function Reviews({reviews}) {
    
    return (
        <>
            {reviews?.length > 0 &&
                <div className='reviews'>
                    <b>ביקורות</b>
                    {reviews.map((review, index) => (
                        <>
                            <Review
                                key={review.id}
                                review={review}
                            />
                            {index !== reviews.length - 1 &&
                                <Divider variant="middle" key={Math.random()} />
                            }
                        </>
                    ))}
                </div>
            }
        </>
    )
}

export default Reviews