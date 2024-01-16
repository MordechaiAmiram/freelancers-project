import './publicUserProfile.css'
import CategoriesNavbar from '../../components/navbar/CategoriesNavbar'
import AddReview from '../../components/addReview/AddReview'
import InnerRouter from '../../components/innerRouter/InnerRouter'
import FreelanceDetails from '../../components/freelanceDetails/FreelanceDetails'
import Reviews from '../../components/reviews/Reviews'
import Portfolios from '../../components/portfolios/Portfolios'
import { userContext } from '../../App'
import { useContext } from 'react'
function PublicUserProfileForm({ profile, portfolios, reviews, setReviews }) {
    const { firstName, lastName, freelanceId, categoryName, parentName, parentId, categoryId } = profile
    const { currentUser } = useContext(userContext)


    return (
        <>
            <CategoriesNavbar />
            <div className='freelance-page'>
                <div className='max-width-container'>
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
                    <div className='grid-container'>
                        <FreelanceDetails
                            profile={profile}
                        />

                        {<div className='portfolios'>
                            <Portfolios portfolios={portfolios} />
                        </div>}

                        <Reviews reviews={reviews} />

                        {currentUser &&
                            freelanceId !== currentUser.freelanceId &&
                            <AddReview freelanceId={freelanceId} setReviews={setReviews}
                            />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PublicUserProfileForm