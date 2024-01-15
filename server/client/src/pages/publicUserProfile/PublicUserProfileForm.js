import './publicUserProfile.css'
import CategoriesNavbar from '../../components/navbar/CategoriesNavbar'
import AddReview from '../../components/addReview/AddReview'
import InnerRouter from '../../components/innerRouter/InnerRouter'
import FreelanceDetails from '../../components/freelanceDetails/FreelanceDetails'
import Reviews from '../../components/reviews/Reviews'
import Portfolios from '../../components/portfolios/Portfolios'
import { userContext } from '../../App'
import { useContext } from 'react'
function PublicUserProfileForm({ profile, portfolios }) {
    const { firstName, lastName, freelanceId, categoryName, parentName, parentId, categoryId } = profile
    const { currentUser } = useContext(userContext)


    return (
        <>
            <CategoriesNavbar />
            <div className='freelance-page max-width-container'>
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
                
                   {portfolios?.length > 0 && <div className='portfolios'>
                    <Portfolios portfolios={portfolios} />
                </div>}

                <Reviews />

                {currentUser &&
                    freelanceId !== currentUser.freelanceId &&
                    <AddReview freelanceId={freelanceId}
                    />}

            </div>
        </>
    )
}

export default PublicUserProfileForm