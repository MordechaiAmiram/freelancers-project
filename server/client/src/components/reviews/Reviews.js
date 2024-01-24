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
        // width: 120,
        // height: 120,
        // padding: theme.spacing(2),
        // ...theme.typography.body2,
        textAlign: 'center',
        width:' 90%',
        minWidth: '300px',
        borderRadius: '5px',
        padding: '10px',
        height: 'fit-content',
        maxHeight: '300px',
        overflow: 'auto'
      }));

    return (
        <>

            {reviews?.length > 0 &&
                <DemoPaper variant="outlined">
                    {/* <div className='reviews background-color-white'> */}
                        <b>ביקורות</b>
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
                    {/* </div> */}
                </DemoPaper>
            }
        </>
    )
}

export default Reviews