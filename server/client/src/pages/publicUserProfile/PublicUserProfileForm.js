import React from 'react'
import './publicUserProfile.css'
import CategoriesNavbar from '../../components/navbar/CategoriesNavbar'
import Navbar from '../../components/navbar/Navbar'
import { Button, Rating } from '@mui/material'
import Review from '../../components/review/Review'
import AddReview from '../../components/addReview/AddReview'
import GetImage from '../../components/GetImage'


function PublicUserProfileForm({ profile, reviews }) {
    const { firstName, lastName, title, rating, about, serviceLocation, phone, email, freelanceId } = profile
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    return (
        <>
            <Navbar />
            <CategoriesNavbar />
                <div className='profile-container'>
                    <h2>{title}</h2>
                    <GetImage imageId={'n3sujdkbkz0qfbmlyyvj'} width={200} className={'profile-picture'} />
                    <div className='profile-inner'>
                        <div className='name'><b>{`${firstName} ${lastName}`}</b></div>

                        <div className='rating'>
                            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                        </div> <br />

                        {/* <div className='category'><b>מקצוע</b></div><br /> */}
                        <div className='work-in-area'>{`מבצע/ת עבודות באזור: ${serviceLocation}`}</div><br />
                        <div className='about'><b>{about}</b></div>
                        {/* <Button className='contact'
                        variant='contained'
                        sx={{ width: 150 }}>צור קשר</Button> */}
                    </div>
                    <div>{phone} <br /> {email}</div>
                </div>
            {/* <div className='portfolio'>תיקיית עבודות</div> */}
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
                                <div className='separate-line' key={review.id}></div>}
                        </>
                    ))}
                </div>
            }
            {currentUser && <AddReview freelanceId={freelanceId} />}
        </>
    )
}

export default PublicUserProfileForm