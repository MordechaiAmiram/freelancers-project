const { pool } = require('../db')
const { updateRatingData, addratingData, getFreelanceRating } = require('./ratingData')

async function updateReview(reviewId, reviewText, rating) {
    const newReviewText = reviewText || await getReviewText(reviewId)
    const newRating = rating || await getRating(reviewId)

    const sql = `
    UPDATE reviews
    SET review_text = ?, rating = ?
    WHERE review_id = ?
    `
    const [{ affectedRows }] = await pool.query(sql, [newReviewText, newRating, reviewId])
    return affectedRows
}

async function getReviewText(reviewId) {
    const sql = `
    SELECT review_text review
    FROM reviews
    WHERE review_id = ?
    `
    const [[ review ]] = await pool.query(sql, [reviewId])
    return review?.review
}

async function getRating(reviewId) {
    const sql = `
    SELECT rating
    FROM reviews
    WHERE review_id = ?
    `
    const [[ rating ]] = await pool.query(sql, [reviewId])
    return rating?.rating
}

async function getFreelanceReviews(freelanceId) {
    const sql = `
    SELECT review_id as id, review_text as text, rating, review_date as date, first_name as firstName, last_name as lastName
        FROM reviews
    JOIN users
        ON (reviewer_id = user_id)
    WHERE freelance_id = ?
    `
    const [reviews] = await pool.query(sql, [freelanceId])
    return reviews
}
async function getReviewerReviews(reviewerId) {
    const sql = `
    SELECT review_text as review, rating
    FROM reviews
    WHERE reviewer_id = ?
    `
    const [reviews] = await pool.query(sql, [reviewerId])
    return reviews
}

async function addReview(text, rating, reviewerId, freelanceId) {
    const isRating = await getFreelanceRating(freelanceId)
    const sql = `
    INSERT INTO reviews (review_text, rating, reviewer_id, freelance_id, review_date)
    VALUES(? ,? ,? ,? , CURDATE())
    `
    const [{ affectedRows }] = await pool.query(sql, [text, rating, reviewerId, freelanceId])
    if (isRating) {
        await updateRatingData(freelanceId, rating)
    } else {
        await addratingData(freelanceId, rating)
    }
    return affectedRows
}

module.exports = {
    getRating,
    getReviewText,
    getFreelanceReviews,
    updateReview,
    addReview,
    getReviewerReviews
}


