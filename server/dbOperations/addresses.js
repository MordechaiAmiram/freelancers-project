const { pool } = require('../db')

async function updateAddress(userId, city, street, building, suite, zipCode) {
    const newCity = city || await getCity(userId)
    const newStreet = street || await getStreet(userId)
    const newBuilding = building || await getBuilding(userId)
    const newSuite = suite || await getSuite(userId)
    const newZipCode = zipCode || await getZipCode(userId)

    const sql = `
        UPDATE addresses
        SET city = ?, street = ?, building = ?, suite = ?, zip_code = ?
        WHERE user_id = ?  
    `
    const [{ affectedRows }] = await pool.query(sql, [newCity, newStreet, newBuilding, newSuite, newZipCode, userId])
    return affectedRows
}

async function addAddress(userId, city, street, building, suite, zipCode) {
    const sql = `
        INSERT INTO addresses (user_id, city, street, building, suite, zip_code)
        VALUES (?, ?, ?, ?, ?, ?)
    `
    const [{ affectedRows }] = await pool.query(sql, [userId, city, street, building, suite, zipCode])
    return affectedRows
}

async function getCity(userId) {
    const sql = `
    SELECT city 
    FROM addresses
    WHERE user_id = ?
    `
    const [[city]] = await pool.query(sql, [userId])
    return city?.city
}

async function getStreet(userId) {
    const sql = `
    SELECT street 
    FROM addresses
    WHERE user_id = ?
    `
    const [[street]] = await pool.query(sql, [userId])
    return street?.street
}
async function getBuilding(userId) {
    const sql = `
    SELECT building 
    FROM addresses
    WHERE user_id = ?
    `
    const [[building]] = await pool.query(sql, [userId])
    return building?.building
}

async function getSuite(userId) {
    const sql = `
    SELECT suite 
    FROM addresses
    WHERE user_id = ?
    `
    const [[suite]] = await pool.query(sql, [userId])
    return suite?.suite
}

async function getZipCode(userId) {
    const sql = `
    SELECT zip_code zipCode
    FROM addresses
    WHERE user_id = ?
    `
    const [[zipCode]] = await pool.query(sql, [userId])
    return zipCode?.zipCode
}

module.exports = {
    getCity,
    getStreet,
    getBuilding,
    getSuite,
    getZipCode,
    updateAddress,
    addAddress
}