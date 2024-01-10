import './publicUserProfile.css'
import CategoriesNavbar from '../../components/navbar/CategoriesNavbar'
import AddReview from '../../components/addReview/AddReview'
import InnerRouter from '../../components/innerRouter/InnerRouter'
import FreelanceDetails from '../../components/freelanceDetails/FreelanceDetails'
import Reviews from '../../components/reviews/Reviews'

function PublicUserProfileForm({ profile }) {

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
            <Reviews />
            
            {currentUser &&
                freelanceId !== currentUser.freelanceId &&
                <AddReview freelanceId={freelanceId}
                />}
        </>
    )
}

export default PublicUserProfileForm