const { getServiceLoaction } = require('./dbOperations/freelancers')
const { getSuite, getZipCode, updateAddress, getCity } = require('./dbOperations/addresses')
const { getClient, getFreelance, getAllUsers, getFreelancersByCategory, addUserGate, getFirstName, getLastName, getEmail, getPhone, gtePassword, getPassword, updateUserDetails, deleteUserAccount } = require('./dbOperations/users')
const { getFreelanceRating } = require('./dbOperations/ratingData')
const { addReview, getFreelanceReviews, getReviewerReviews, updateReview, getReviewText, getRating } = require('./dbOperations/reviews')
const { getChildren, getParentsCategories, addCategory, updateCategory } = require('./dbOperations/categories')

async function test() {
    try {
        // const test = await getClient('menachem1234', 'menach123em')
        // const test = await addUserGate(true, 'שירה', 'אוחנה', 'shira_ochana', 'shira.ochana@gamil.com','0578656555',
        // 'shira43', 'אלעד', 'רבי מאיר', 25, 2, '122235', 'צלמת בעלת נסיון מעל 10 שנים במגוון סגנונות, אלופה בצילומי חוץ', 'צלמת מקצועית',
        // 'pro', 'ללא הגבלה', 1)const 
        const test = await deleteUserAccount(142)
        console.log(test);
    } catch (error) {
        console.log(error);
    }
}
test()
