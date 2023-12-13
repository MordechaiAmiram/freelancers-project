const { pool } = require('../db')

function getClient(username, password) {
    const sql = `
    SELECT * 
    FROM users
    WHERE username = ? AND password = ?
    `
    const [client] = pool.query(sql, [username, password])
    return client
}

function getFreelance(username, password) {
    const sql = `
    SELECT * 
    FROM users
    JOIN addresses
        USING(user_id)
    JOIN freelancers
        USING(user_id)
    WHERE username = ? AND password = ?
    `
    const [freelance] = pool.query(sql, [username, password])
    return freelance
}

function getAllUsers() {
    const sql = `
    SELECT * 
    FROM users
    LEFT JOIN addresses
        USING(user_id)
    LEFT JOIN freelancers
        USING(user_id)
    `
    const [clients] = pool.query(sql)
    return clients
}

function getFreelancersByCategory(categoryId) {
    const sql = `
    SELECT * FROM freelancers
    JOIN freelance_category_enrollment
	    USING(freelance_id)
    WHERE freelance_category_enrollment.category_id = ?
    `
    const [freelancers] = pool.query(sql, [categoryId])
    return freelancers
}

function addUserGate(isFreelance, firstName, lastName, username, email, phone, password,
    city, street, building, suite, zipCode,
    about, title, accountType, serviceLocation, 
    categoryId) {
    const userId = addUser(firstName, lastName, username, email, phone, password)
    if (isFreelance) {
        addAddress(userId, city, street, building, suite, zipCode)
        const freelanceId = addFreelance(userId, about, title, accountType, serviceLocation)
        addfreelanceToCategory(freelanceId, categoryId)
    }
    return userId
}

function addUser(firstName, lastName, username, email, phone, password) {
    const sql = `
        INSERT INTO users (first_name, last_name, username, registration_date, email, phone, password)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `
    const [{ insertId }] = pool.query(sql, [firstName, lastName, username, 'CURDATE()', email, phone, password])
    return insertId
}

function addAddress(userId, city, street, building, suite, zipCode) {
    const sql = `
    INSERT INTO addresses (user_id, city, street, building, suite, zipCode)
    VALUES (?, ?, ?, ?, ?, ?)
`
    const [{ affectedRows }] = pool.query(sql, [userId, city, street, building, suite, zipCode])
    return affectedRows
}

function addFreelance(userId, about, title, accountType, serviceLocation) {
    const sql = `
    INSERT INTO freelancers(user_id, about, title, accountType, serviceLocation)
    VALUES (?, ?, ?, ?, ?)
    `
    const [{ insertId }] = pool.query(sql, [userId, about, title, accountType, serviceLocation])
    return insertId
}

function addfreelanceToCategory(freelanceId, categoryId) {
    const sql = `
    INSERT INTO freelance_category_enrollment(freelance_id, category_id)
    VALUSE(?, ?)
    `
    const [{ affectedRows }] = pool.query(sql, [freelanceId, categoryId])
    return affectedRows
}

module.exports = {
    getClient,
    getFreelance,
    getAllUsers,
    getFreelancersByCategory,
    addUserGate
}
