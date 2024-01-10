import React from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { Divider } from '@mui/material'
import Review from '../review/Review'
import './reviews.css'

function Reviews() {
    const location = useLocation()
    const splitURL = location.pathname.split('/')
    const [reviews] = useFetch(`/reviews/by-freelance/${splitURL[splitURL.length - 1]}`)

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