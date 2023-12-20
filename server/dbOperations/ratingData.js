const { pool } = require('../db')

async function updateRatingData(freelanceId, currRating) {
    const sql = `
    UPDATE rating_data
    SET number_of_ratings = number_of_ratings + 1,
        cumulative_rating = cumulative_rating + ?
    WHERE freelance_id = ?
    `
    const [{ affectedRows }] = await pool.query(sql, [currRating, freelanceId])
    return affectedRows
}

async function addratingData(freelanceId, currRating) {
    const sql = `
    INSERT INTO rating_data (freelance_id, number_of_ratings, cumulative_rating)
    VALUES (
        ?, ?, ?)
    `
    const [{ affectedRows }] = await pool.query(sql, [freelanceId, 1, currRating])
    return affectedRows
}

async function getFreelanceRating(freelanceId) {
    const sql = `
    SELECT (cumulative_rating / number_of_ratings) as averageRating
    FROM rating_data
    WHERE freelance_id = ?
    `
    const [[average]] = await pool.query(sql, [freelanceId])
    return average?.average
}


module.exports = {
    updateRatingData,
    addratingData,
    getFreelanceRating
}

