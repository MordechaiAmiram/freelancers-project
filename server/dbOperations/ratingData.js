const { pool } = require('../db')

const updateRatingDataSql = `
    UPDATE rating_data
    SET number_of_ratings = number_of_ratings + 1,
        cumulative_rating = cumulative_rating + ?
    WHERE freelance_id = ?
    `
const addratingDataSql = `
    INSERT INTO rating_data (freelance_id, number_of_ratings, cumulative_rating)
    VALUES (
        ?, ?, ?)
    `

async function decreaseRatingData(freelanceId, currRating) {
    const sql = `
    UPDATE rating_data
    SET number_of_ratings = number_of_ratings - 1,
        cumulative_rating = cumulative_rating - ?
    WHERE freelance_id = ?
    `
    const [{ affectedRows }] = await pool.query(sql, [currRating, freelanceId])
    if (affectedRows) {
        const numberOfRatings = await getNumberOfRatings(freelanceId)
        if (numberOfRatings <= 0) {
            deleteRatingData(freelanceId)
        }
    }
    return affectedRows
}

async function getFreelanceRating(freelanceId) {
    const sql = `
    SELECT ROUND((cumulative_rating / number_of_ratings), 1) as averageRating
    FROM rating_data
    WHERE freelance_id = ?
    `
    const [[average]] = await pool.query(sql, [freelanceId])
    return average?.average
}

async function getNumberOfRatings(freelanceId) {
    const sql = `
    SELECT number_of_ratings numberOfRatings
    FROM rating_data
    WHERE freelance_id = ?
    `
    const [[numberOfRatings]] = await pool.query(sql, [freelanceId])
    return numberOfRatings?.numberOfRatings
}

async function deleteRatingData(freelanceId) {
    const sql = `
    DELETE FROM rating_data
    WHERE freelance_id = ?
    `
    const [{ affectedRows }] = await pool.query(sql, [freelanceId])
    return affectedRows
}


module.exports = {
    updateRatingDataSql,
    addratingDataSql,
    getFreelanceRating,
    decreaseRatingData,
    getNumberOfRatings
}

