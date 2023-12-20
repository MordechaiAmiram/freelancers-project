const { pool } = require('../db')
const { addAddress } = require('./addresses')

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

async function addUserGate(isFreelance, firstName, lastName, username, email, phone, password,
    city, street, building, suite, zipCode,
    about, title, accountType, serviceLocation,
    categoryId) {
    const userId = await addUser(firstName, lastName, username, email, phone, password)
    if (isFreelance) {
        const affectedRows = await addAddress(userId, city, street, building, suite, zipCode)
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

async function updateUserDetails(userId, firstName, lastName, email, phone, password) {

    const newFirstName = firstName || await getFirstName(userId)
    const newLastName = lastName || await getLastName(userId)
    const newEmail = email || await getEmail(userId)
    const newPhone = phone || await getPhone(userId)
    const newPassword = password || await getPassword(userId)

    const sql = `
    UPDATE users
    SET first_name = ?, last_name = ?, email = ?, phone = ?, password = ? 
    WHERE user_id = ?
    `
    const [{ affectedRows }] = await pool.query(sql, [newFirstName, newLastName, newEmail, newPhone, newPassword, userId])
    return affectedRows
}

async function getFirstName(userId) {
    const sql = `
    SELECT first_name as firstName
    FROM users
    WHERE user_id = ?
    `
    const [[firstName]] = await pool.query(sql, [userId])
    return firstName?.firstName
}

async function getLastName(userId) {
    const sql = `
    SELECT last_name as lastName
    FROM users
    WHERE user_id = ?
    `
    const [[lastName]] = await pool.query(sql, [userId])
    return lastName?.lastName
}

async function getEmail(userId) {
    const sql = `
    SELECT email
    FROM users
    WHERE user_id = ?
    `
    const [[email]] = await pool.query(sql, [userId])
    return email?.email
}

async function getPhone(userId) {
    const sql = `
    SELECT phone
    FROM users
    WHERE user_id = ?
    `
    const [[phone]] = await pool.query(sql, [userId])
    return phone?.phone
}

async function getPassword(userId) {
    const sql = `
    SELECT password
    FROM users
    WHERE user_id = ?
    `
    const [[password]] = await pool.query(sql, [userId])
    return password?.password
}

async function deleteUserAccount(userId) {
    const sql = ` 
    DELETE FROM users
    WHERE user_id = ?;
    `
    const [{ affectedRows }] = await pool.query(sql, [userId, userId, userId])
    return affectedRows
}

module.exports = {
    getClient,
    getFreelance,
    getAllUsers,
    addUserGate,
    getFirstName,
    getLastName,
    getEmail,
    getPhone,
    getPassword,
    updateUserDetails,
    deleteUserAccount
}
