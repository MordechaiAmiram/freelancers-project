import React from 'react'
import { Divider, Paper } from '@mui/material'
import Review from '../review/Review'
import './reviews.css'
import styled from '@emotion/styled';
import useMediaQuery from '@mui/material/useMediaQuery';

function Reviews({ reviews, handleDeleteReview }) {

    // function SimpleMediaQuery() {
    //   const matches = useMediaQuery('(min-width:600px)');
    //   return <span>{`(min-width:600px) matches: ${matches}`}</span>;
    // }
    const DemoPaper = styled(Paper)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: ' 90%',
        minWidth: '300px',
        borderRadius: '8px',
        height: 'fit-content',
    }));

    return (
        <>

            {reviews?.length > 0 &&
                <DemoPaper variant="outlined">
                    <div className='reviews-header'><b>ביקורות</b></div>
                    <Divider />
                    <div className='reviews'> 
                        {reviews.map((review, index) => (
                            <>
                                <Review
                                    key={review.id}
                                    review={review}
                                    handleDeleteReview={handleDeleteReview}
                                />
                                {index !== reviews.length - 1 &&
                                    <Divider variant="middle" key={Math.random()} />
                                }
                            </>
                        ))}
                    </div>
                </DemoPaper>
            }
        </>
    )
}

export default Reviews