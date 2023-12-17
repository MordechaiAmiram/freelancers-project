const { pool } = require('../db')

async function updateFreelance(freelanceId, title, about, serviceLocation, type) {
    const newTitle = title || await getTitle(freelanceId)
    const newAbout = about || await getAbout(freelanceId)
    const newSrviceLoaction = serviceLocation || await getServiceLoaction(freelanceId)
    const newType = type || await getType(freelanceId)

    const sql = `
    UPDATE freelancers
    SET title = ?, about = ?, serviceLocation = ?, accountType = ?
    WHERE freelance_id = ?
    `
    const [{ affectedRows }] = await pool.query(sql, [newTitle, newAbout, newSrviceLoaction, newType, freelanceId])
    return affectedRows
}

async function getTitle(freelanceId) {
    const sql = `
    SELECT title 
    FROM freelancers
    WHERE freelance_id = ?
    `
    const [[ title ]] = await pool.query(sql, [freelanceId])
    return title?.title
}


async function getAbout(freelanceId) {
    const sql = `
    SELECT about 
    FROM freelancers
    WHERE freelance_id = ?
    `
    const [[ about ]] = await pool.query(sql, [freelanceId])
    return about?.about
}


async function getType(freelanceId) {
    const sql = `
    SELECT account_type type
    FROM freelancers
    WHERE freelance_id = ?
    `
    const [[ type ]] = await pool.query(sql, [freelanceId])
    return type?.type
}


async function getServiceLoaction(freelanceId) {
    const sql = `
    SELECT service_location serviceLocation
    FROM freelancers
    WHERE freelance_id = ?
    `
    const [[ serviceLocation ]] = await pool.query(sql, [freelanceId])
    return serviceLocation?.serviceLocation
}

async function getFreelancersByCategory(categoryId){
    const sql = `
    SELECT * FROM freelancers
        JOIN freelance_category_enrollment
	USING(freelance_id)
    WHERE freelance_category_enrollment.category_id = ?
    `
    const [freelancers] = pool.query(sql, [categoryId])
    return freelancers
}

module.exports = {
    getTitle,
    getAbout,
    getType,
    getServiceLoaction,
    updateFreelance,
    getFreelancersByCategory
}