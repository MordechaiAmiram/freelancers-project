const { pool } = require('../db')

async function updateFreelance(freelanceId, title, about, serviceLocation, type, imageId) {
    const newTitle = title || await getTitle(freelanceId)
    const newAbout = about || await getAbout(freelanceId)
    const newServiceLocation = serviceLocation || await getServiceLocation(freelanceId)
    const newType = type || await getType(freelanceId)
    const newImageId = imageId || await getImageId(freelanceId)

    const sql = `
    UPDATE freelancers
    SET title = ?, about = ?, service_location = ?, account_type = ?, profile_image_id = ?
    WHERE freelance_id = ?
    `
    const [{ affectedRows }] = await pool.query(sql, [newTitle, newAbout, newServiceLocation, newType, newImageId, freelanceId])
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

async function getImageId(freelanceId) {
    const sql = `
    SELECT profile_image_id profileImageId
    FROM freelancers
    WHERE freelance_id = ?
    `
    const [[profileImageId]] = await pool.query(sql, [freelanceId])
    return profileImageId?.profileImageId
}

async function getFreelancersByCategory(categoryId) {
    const sql = `
    SELECT title, about, service_location as serviceLocation, account_type as accountType, 
        freelance_id as freelanceId, first_name as firstName, last_name as lastName, phone, email,
        profile_image_id as profileImageId,
        ROUND(AVG(rating), 1) as averageRating,
        COUNT(rating) as numberOfRatings,
		c1.category_id as categoryId, c1.category_name as categoryName,
        c1.parent_id, c2.category_name as parentName
    FROM freelancers 
        JOIN users
    USING(user_id)
        JOIN freelance_category_enrollment fce
    USING(freelance_id)
		LEFT JOIN reviews
	USING(freelance_id)
       LEFT JOIN categories c1
	USING (category_id)
		LEFT JOIN categories c2
    ON c1.parent_id = c2.category_id 
    WHERE fce.category_id = ?
    AND users.is_confirmed = 1
    OR c1.parent_id = ?
    AND users.is_confirmed = 1
    GROUP BY freelance_id, categoryName
    ORDER BY averageRating DESC
    `
    const [freelancers] = await pool.query(sql, [categoryId, categoryId])
    return freelancers
}

async function getFreelance(freelanceId) {
    const sql = `
    SELECT title, about, service_location as serviceLocation, profile_image_id as profileImageId,
        freelance_id as freelanceId, first_name as firstName, last_name as lastName, 
        phone, email, ROUND(AVG(rating), 1) as averageRating,
        COUNT(rating) as numberOfRatings,
		c1.category_id as categoryId, c1.category_name as categoryName,
        c1.parent_id as parentId, c2.category_name as parentName
    FROM freelancers f
        JOIN users
    USING(user_id)
        JOIN freelance_category_enrollment fce
    USING(freelance_id)
        LEFT JOIN reviews
	USING(freelance_id)
       LEFT JOIN categories c1
	USING (category_id)
		LEFT JOIN categories c2
    ON c1.parent_id = c2.category_id 
    WHERE f.freelance_id = ?
    AND users.is_confirmed = 1
    GROUP BY categoryId
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
    WHERE users.is_confirmed = 0
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