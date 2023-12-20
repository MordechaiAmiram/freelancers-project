const { pool } = require('../db')

async function updateFreelance(freelanceId, title, about, serviceLocation, type) {
    const newTitle = title || await getTitle(freelanceId)
    const newAbout = about || await getAbout(freelanceId)
    const newServiceLocation = serviceLocation || await getServiceLocation(freelanceId)
    const newType = type || await getType(freelanceId)
    const sql = `
    UPDATE freelancers
    SET title = ?, about = ?, service_location = ?, account_type = ?
    WHERE freelance_id = ?
    `
    const [{ affectedRows }] = await pool.query(sql, [newTitle, newAbout, newServiceLocation, newType, freelanceId])
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

async function getFreelancersByCategory(categoryId) {
    const sql = `
    SELECT title, about, service_location as serviceLocation,
        freelance_id as freelanceId, first_name as firstName, last_name as lastName, 
        category_id as categoryId, (cumulative_rating / number_of_ratings) as rating
    FROM freelancers 
        JOIN users
    USING(user_id)
        JOIN freelance_category_enrollment fce
    USING(freelance_id)
		LEFT JOIN rating_data
	USING(freelance_id)
    WHERE fce.category_id = ?
    `
    const [freelancers] = await pool.query(sql, [categoryId])
    return freelancers
}

module.exports = {
    getTitle,
    getAbout,
    getType,
    getServiceLocation,
    updateFreelance,
    getFreelancersByCategory
}