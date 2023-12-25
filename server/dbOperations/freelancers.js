const { pool } = require('../db')

async function updateFreelance(freelanceId, title, about, serviceLocation, type, isConfirmed, imageId) {
    const newTitle = title || await getTitle(freelanceId)
    const newAbout = about || await getAbout(freelanceId)
    const newServiceLocation = serviceLocation || await getServiceLocation(freelanceId)
    const newType = type || await getType(freelanceId)
    const NewIsConfirmed = isConfirmed || await getIsConfirmed(freelanceId)
    const newImageId = imageId || await getImageId(freelanceId)

    const sql = `
    UPDATE freelancers
    SET title = ?, about = ?, service_location = ?, account_type = ?, is_confirmed = ?, profile_image_id = ?
    WHERE freelance_id = ?
    `
    const [{ affectedRows }] = await pool.query(sql, [newTitle, newAbout, newServiceLocation, newType, NewIsConfirmed, newImageId, freelanceId])
    return affectedRows
}

async function getTitle(freelanceId) {
    const sql = `
    SELECT title 
    FROM freelancers
    WHERE freelance_id = ?
    `
    const [[title]] = await pool.query(sql, [freelanceId])
    return title?.title
}


async function getAbout(freelanceId) {
    const sql = `
    SELECT about 
    FROM freelancers
    WHERE freelance_id = ?
    `
    const [[about]] = await pool.query(sql, [freelanceId])
    return about?.about
}


async function getType(freelanceId) {
    const sql = `
    SELECT account_type type
    FROM freelancers
    WHERE freelance_id = ?
    `
    const [[type]] = await pool.query(sql, [freelanceId])
    return type?.type
}


async function getServiceLocation(freelanceId) {
    const sql = `
    SELECT service_location serviceLocation
    FROM freelancers
    WHERE freelance_id = ?
    `
    const [[serviceLocation]] = await pool.query(sql, [freelanceId])
    return serviceLocation?.serviceLocation
}

async function getIsConfirmed(freelanceId) {
    const sql = `
    SELECT is_confirmed isConfirmed
    FROM freelancers
    WHERE freelance_id = ?
    `
    const [[isConfirmed]] = await pool.query(sql, [freelanceId])
    return isConfirmed?.isConfirmed
}

async function getImageId(freelanceId) {
    const sql = `
    SELECT profile_image_id profileImageId
    FROM freelancers
    WHERE freelance_id = ?
    `
    const [[imageId]] = await pool.query(sql, [freelanceId])
    return imageId?.imageId
}

async function getFreelancersByCategory(categoryId) {
    const sql = `
    SELECT title, about, service_location as serviceLocation, account_type as accountType,
        freelance_id as freelanceId, first_name as firstName, last_name as lastName, 
        phone, email, category_id as categoryId,
        ROUND((cumulative_rating / number_of_ratings), 1) as rating
    FROM freelancers 
        JOIN users
    USING(user_id)
        JOIN freelance_category_enrollment fce
    USING(freelance_id)
		LEFT JOIN rating_data
	USING(freelance_id)
    WHERE fce.category_id = ?
    AND is_confirmed = 1
    `
    const [freelancers] = await pool.query(sql, [categoryId])
    return freelancers
}

async function getFreelance(freelanceId) {
    const sql = `
    SELECT title, about, service_location as serviceLocation,
        freelance_id as freelanceId, first_name as firstName, last_name as lastName, 
        phone, email, category_id as categoryId,
        (cumulative_rating / number_of_ratings) as rating
    FROM freelancers f
        JOIN users
    USING(user_id)
        JOIN freelance_category_enrollment fce
    USING(freelance_id)
		LEFT JOIN rating_data
	USING(freelance_id)
    WHERE f.freelance_id = ?
    `
    const [[freelancers]] = await pool.query(sql, [freelanceId])
    return freelancers
}

async function getUnconfirmedFreelancers() {
    const sql = `
    SELECT title, about, service_location as serviceLocation, account_type as accountType,
        freelance_id as freelanceId, first_name as firstName, last_name as lastName, 
        phone, email, category_name as categoryName
    FROM freelancers f
        JOIN users
    USING(user_id)
        JOIN freelance_category_enrollment fce
    USING(freelance_id)
        JOIN categories
    USING (category_id)
    WHERE f.is_confirmed = 0
    `
    const [freelancers] = await pool.query(sql)
    return freelancers
}

async function getSumOfFreelancers() {
    const sql = `
    SELECT COUNT(freelance_id)
    FROM freelancers
    `
    const [[{ 'COUNT(freelance_id)': sum }]] = await pool.query(sql)
    return sum
}

module.exports = {
    getTitle,
    getAbout,
    getType,
    getServiceLocation,
    updateFreelance,
    getFreelancersByCategory,
    getFreelance,
    getUnconfirmedFreelancers,
    getSumOfFreelancers,
    getImageId
}