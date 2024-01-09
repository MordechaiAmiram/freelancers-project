import './publicUserProfile.css'
import CategoriesNavbar from '../../components/navbar/CategoriesNavbar'
import Review from '../../components/review/Review'
import AddReview from '../../components/addReview/AddReview'
import InnerRouter from '../../components/innerRouter/InnerRouter'
import { Divider } from '@mui/material'
import FreelanceDetails from '../../components/freelanceDetails/FreelanceDetails'

function PublicUserProfileForm({ profile, reviews }) {

    const { firstName, lastName, freelanceId, categoryName, parentName, parentId, categoryId } = profile
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
            <FreelanceDetails
                profile={profile}
            />

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
                                <Divider variant="middle" key={Math.random()} />
                            }
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