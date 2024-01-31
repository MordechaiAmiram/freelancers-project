const { getServiceLoaction, getFreelance, getSumOfFreelancers, getImageId } = require('./dbOperations/freelancers')
const { getSuite, getZipCode, updateAddress, getCity } = require('./dbOperations/addresses')
const { getClient, getAllUsers, addUserGate, getFirstName, getLastName, getEmail, getPhone, gtePassword, getPassword, updateUserDetails, deleteUserAccount, getUnconfirmedUsers } = require('./dbOperations/users')
const { getFreelanceRating, getNumberOfRatings } = require('./dbOperations/ratingData')
const { addReview, getFreelanceReviews, getReviewerReviews, updateReview, getReviewText, getRating, getFreelanceId, deleteReview } = require('./dbOperations/reviews')
const { getChildren, getParentsCategories, addCategory, updateCategory, searchForCategory } = require('./dbOperations/categories')
const { createPortfolio, addImage } = require('./dbOperations/portfolios')
const { getMessagesByReceiver, getMessagesBySender, addMessage } = require('./dbOperations/messages')

async function test() {
    try {
        // const test = await getClient('menachem1234', 'menach123em')
        // const test = await addUserGate(true, 'שירה', 'אוחנה', 'shira_ochana', 'shira.ochana@gamil.com','0578656555',
        // 'shira43', 'אלעד', 'רבי מאיר', 25, 2, '122235', 'צלמת בעלת נסיון מעל 10 שנים במגוון סגנונות, אלופה בצילומי חוץ', 'צלמת מקצועית',
        // 'pro', 'ללא הגבלה', 1)const 
        const test = await addMessage(70, 71, 'בוקר טוב')
        console.log(test);
    } catch (error) {
        console.log(error);
    }
}
test()
