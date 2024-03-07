const { pool } = require('../db')

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
    const [[review]] = await pool.query(sql, [reviewId])
    return review?.review
}

async function getRating(reviewId) {
    const sql = `
    SELECT rating
    FROM reviews
    WHERE review_id = ?
    `
    const [[rating]] = await pool.query(sql, [reviewId])
    return rating?.rating
}

async function getFreelanceId(reviewId) {
    const sql = `
    SELECT freelance_id freelanceId
    FROM reviews
    WHERE review_id = ?
    `
    const [[freelanceId]] = await pool.query(sql, [reviewId])
    return freelanceId?.freelanceId
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
    const sql = `
    INSERT INTO reviews (review_text, rating, reviewer_id, freelance_id, review_date)
    VALUES(? ,? ,? ,? , CURDATE())
    `
    const [{ affectedRows }] = await pool.query(sql, [text, rating, reviewerId, freelanceId])
    if (affectedRows) return await getFreelanceRatingNew(freelanceId)
    return affectedRows
}

async function deleteReview(reviewId) {
    const freelanceId = await getFreelanceId(reviewId)

    const sql = `
    DELETE FROM reviews
    WHERE review_id = ?
    `
    const [{ affectedRows }] = await pool.query(sql, [reviewId])
    if (affectedRows) {
        return await getFreelanceRatingNew(freelanceId)
    }
    return affectedRows
}

async function getFreelanceRatingNew(freelanceId) {
    const sql = `
    SELECT ROUND(AVG(rating), 1) as averageRating
    FROM reviews
    WHERE freelance_id = ?
    `
    const [[{ averageRating }]] = await pool.query(sql, [freelanceId])
    return averageRating
}

module.exports = {
    getRating,
    getReviewText,
    getFreelanceReviews,
    updateReview,
    addReview,
    getReviewerReviews,
    deleteReview,
    getFreelanceId,
    getFreelanceRatingNew
}


