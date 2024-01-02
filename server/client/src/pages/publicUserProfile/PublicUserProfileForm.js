import React from 'react'
import './publicUserProfile.css'
import CategoriesNavbar from '../../components/navbar/CategoriesNavbar'
import Navbar from '../../components/navbar/Navbar'
import StarIcon from '@mui/icons-material/Star'; 
import Review from '../../components/review/Review'
import AddReview from '../../components/addReview/AddReview'
import GetImage from '../../components/GetImage'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function PublicUserProfileForm({ profile, reviews }) {
    const { firstName, lastName, title, rating, about, serviceLocation, 
        phone, email, freelanceId, profileImageId, numberOfRatings, } = profile
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    return (
        <>
            <Navbar />
            <CategoriesNavbar />
                <div className='profile-container'>
                    <h2>{title}</h2>
                    <GetImage imageId={profileImageId} width={200} className={'profile-picture'} />
                    <div className='profile-inner'>
                        <div className='name'><b>{`${firstName} ${lastName}`}</b></div>

                        <div className='rating'>
                        {numberOfRatings && `(${numberOfRatings}) `}
                        {rating ? `${rating}` : '0'}
                        <StarIcon fontSize='large' sx={{color: 'gold'}} />
                        </div> <br />

                        {/* <div className='category'><b>מקצוע</b></div><br /> */}
                        <div className='work-in-area'>{`מבצע/ת עבודות באזור: ${serviceLocation}`}</div><br />
                        <div className='about'><b>{about}</b></div>
                        {/* <Button className='contact'
                        variant='contained'
                        sx={{ width: 150 }}>צור קשר</Button> */}
                    </div>
                    <div><PhoneIcon />{phone} <br /><EmailIcon /> {email}</div>
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
                                <div className='separate-line' key={Math.random()}></div>}
                        </>
                    ))}
                </div>
            }
            {currentUser && <AddReview freelanceId={freelanceId} />}
        </>
    )
}

export default PublicUserProfileForm