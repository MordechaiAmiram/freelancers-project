import './publicUserProfile.css'
import CategoriesNavbar from '../../components/navbar/CategoriesNavbar'
import StarIcon from '@mui/icons-material/Star';
import Review from '../../components/review/Review'
import AddReview from '../../components/addReview/AddReview'
import GetImage from '../../components/GetImage'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InnerRouter from '../../components/innerRouter/InnerRouter';
import { Tooltip } from '@mui/material';

function PublicUserProfileForm({ profile, reviews, handleMouseOver, showNumberOfRatings, handleMouseLeave }) {
    const { firstName, lastName, title, rating, about, serviceLocation,
        phone, email, freelanceId, profileImageId, numberOfRatings, categoryName,
        parentName, parentId, categoryId } = profile

    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    return (
        <>
            <CategoriesNavbar />
            {parentName &&
                <div className='profile-page-router'>
                    <InnerRouter
                        parentName={parentName}
                        parentId={parentId}
                        categoryName={categoryName}
                        categoryId={categoryId}
                        freelanceName={`${firstName} ${lastName}`}
                    />
                </div>
            }

            <div className='profile-container'>

                <h2>{title}</h2>

                <GetImage imageId={profileImageId} width={200} className={'profile-picture'} />

                <div className='profile-inner'>
                    <div className='name-and-rating-container'>
                        <div className='name'>{`${firstName} ${lastName}`}</div>

                        <div className='rating'>
                            <div>
                                <div className='number-of-ratings'
                                    onMouseOver={handleMouseOver}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Tooltip title='מספר מדרגים' placement="top"
                                        slotProps={{
                                            popper: {
                                                modifiers: [
                                                    {
                                                        name: 'offset',
                                                        options: {
                                                            offset: [0, -14],
                                                        },
                                                    },
                                                ],
                                            },
                                        }}>
                                        {numberOfRatings && `(${numberOfRatings}) `}
                                    </Tooltip>
                                </div>
                                <div className='rating-digit'>
                                    {rating ? `${rating}` : '0'}
                                </div>
                            </div>
                            <div>
                                <StarIcon fontSize='large' sx={{ color: 'gold' }} />
                            </div>
                        </div>
                    </div>


                    <div className='work-in-area'>{`מבצע/ת עבודות באזור: ${serviceLocation}`}</div><br />

                    <div className='about'>{about}</div>

                    <div className='contact'>
                        <div><PhoneIcon />{phone} </div>
                        <div><EmailIcon /> {email}</div>
                    </div>

                </div>
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
            {currentUser &&
                freelanceId !== currentUser.freelanceId &&
                <AddReview freelanceId={freelanceId}
                />}
        </>
    )
}

export default PublicUserProfileForm