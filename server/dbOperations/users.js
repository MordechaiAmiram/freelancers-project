const { pool } = require('../db')
const { addAddressSql } = require('./addresses')

async function getClient(username, password) {
    const sql = `
    SELECT user_id as userId, first_name as firstName, last_name as lastName, email, phone,
        is_admin as isAdmin, password, username, freelance_id as freelanceId, 
        title, about, account_type as accountType, 
        service_location as serviceLocation, profile_image_id as profileImageId,
        city, street, building, suite, zip_code as zipCode
    FROM users
        LEFT JOIN freelancers
    USING (user_id)
        LEFT JOIN addresses
    USING(user_id)
    WHERE username = ? AND password = ?
    `
    const [[client]] = await pool.query(sql, [username, password])
    return client
}

async function getAllUsers() {
    const sql = `
    SELECT user_id as userId, first_name as firstName, last_name as lastName, email, phone, 
        is_admin as isAdmin, password, username, freelance_id as freelanceId, title, about, account_type as accountType, 
        service_location as serviceLocation, profile_image_id as profileImageId,
        city, street, building, suite, zip_code as zipCode
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
    city, street, building, suite, zipCode, about, title, accountType, serviceLocation,
    categoryId, imageId) {

    let connection

    try {
        connection = await pool.getConnection()
        await connection.beginTransaction()

        const [{ insertId }] = await connection.query(addUserSql, [firstName, lastName, username, email, phone, password])

        if (isFreelance) {
            await connection.query(addAddressSql, [insertId, city, street, building, suite, zipCode])
            const [freelanceId] = await connection.query(addFreelanceSql, [insertId, about, title, accountType, serviceLocation, imageId])
            await connection.query(addfreelanceToCategorySql, [freelanceId?.insertId, categoryId])
        }

        await connection.commit()
        return insertId

    } catch (err) {
        if (connection) {
            await connection.rollback()
        }
        throw err
    } finally {
        if (connection) {
            pool.releaseConnection(connection)
        }
    }
}

const addUserSql = `
        INSERT INTO users (first_name, last_name, username, email, phone, password, registration_date)
        VALUES (?, ?, ?, ?, ?, ?, CURDATE())
    `

const addFreelanceSql = `
    INSERT INTO freelancers(user_id, about, title, account_type, service_location, profile_image_id)
    VALUES (?, ?, ?, ?, ?, ?)
    `

const addfreelanceToCategorySql = `
    INSERT INTO freelance_category_enrollment(freelance_id, category_id)
    VALUES(?, ?)
    `

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

async function getSumOfUsers() {
    const sql = `
    SELECT COUNT(user_id)
    FROM users
    LEFT JOIN freelancers
        USING(user_id)
    `
    const [[{ 'COUNT(user_id)': sum }]] = await pool.query(sql)
    return sum
}

module.exports = {
    getClient,
    getAllUsers,
    addUserGate,
    getFirstName,
    getLastName,
    getEmail,
    getPhone,
    getPassword,
    updateUserDetails,
    deleteUserAccount,
    getSumOfUsers
}
