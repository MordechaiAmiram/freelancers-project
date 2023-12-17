const { pool } = require('../db')

async function getClient(username, password) {
    const sql = `
    SELECT * 
    FROM users
    WHERE username = ? AND password = ?
    `
    const [[client]] = await pool.query(sql, [username, password])
    return client
}

async function getFreelance(username, password) {
    const sql = `
    SELECT * 
    FROM users
    JOIN addresses 
        USING(user_id)
    JOIN freelancers
        USING(user_id)
    WHERE username = ? AND password = ?
    `
    const [[freelance]] = await pool.query(sql, [username, password])
    return freelance
}

async function getAllUsers() {
    const sql = `
    SELECT * 
    FROM users
    LEFT JOIN addresses
        USING(user_id)
    LEFT JOIN freelancers
        USING(user_id)
    `
    const [clients] = await pool.query(sql)
    return clients
}

async function getFreelancersByCategory(categoryId) {
    const sql = `
    SELECT * FROM freelancers
    JOIN freelance_category_enrollment
	    USING(freelance_id)
    WHERE freelance_category_enrollment.category_id = ?
    `
    const [freelancers] = await pool.query(sql, [categoryId])
    return freelancers
}

async function addUserGate(isFreelance, firstName, lastName, username, email, phone, password,
    city, street, building, suite, zipCode,
    about, title, accountType, serviceLocation, 
    categoryId) {
    const userId = await addUser(firstName, lastName, username, email, phone, password)
    if (isFreelance) {
        await addAddress(userId, city, street, building, suite, zipCode)
        const freelanceId = await addFreelance(userId, about, title, accountType, serviceLocation)
        await addfreelanceToCategory(freelanceId, categoryId)
    }
    return userId
}

async function addUser(firstName, lastName, username, email, phone, password) {
    const sql = `
        INSERT INTO users (first_name, last_name, username, email, phone, password, registration_date)
        VALUES (?, ?, ?, ?, ?, ?, CURDATE())
    `
    const [{ insertId }] = await pool.query(sql, [firstName, lastName, username, email, phone, password])
    return insertId
}

async function addAddress(userId, city, street, building, suite, zipCode) {
    const sql = `
    INSERT INTO addresses (user_id, city, street, building, suite, zip_code)
    VALUES (?, ?, ?, ?, ?, ?)
`
    const [{ affectedRows }] = await pool.query(sql, [userId, city, street, building, suite, zipCode])
    return affectedRows
}

async function addFreelance(userId, about, title, accountType, serviceLocation) {
    const sql = `
    INSERT INTO freelancers(user_id, about, title, account_type, service_location)
    VALUES (?, ?, ?, ?, ?)
    `
    const [{ insertId }] = await pool.query(sql, [userId, about, title, accountType, serviceLocation])
    return insertId
}

async function addfreelanceToCategory(freelanceId, categoryId) {
    const sql = `
    INSERT INTO freelance_category_enrollment(freelance_id, category_id)
    VALUES(?, ?)
    `
    const [{ affectedRows }] = await pool.query(sql, [freelanceId, categoryId])
    return affectedRows
}

module.exports = {
    getClient,
    getFreelance,
    getAllUsers,
    getFreelancersByCategory,
    addUserGate
}
