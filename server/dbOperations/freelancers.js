const { pool } = require('../db')

function updateFreelance(freelanceId, title, about, serviceLocation, type) {
    const newTitle = title? title: getTitle(freelanceId)
    const newAbout = about? about: getAbout(freelanceId)
    const newSrviceLoaction = serviceLocation? serviceLocation: getServiceLoaction(freelanceId)
    const newType = type? type: getType(freelanceId)

    const sql = `
    UPDATE freelancers
    SET title = ?, about = ?, serviceLocation = ?, accountType = ?
    WHERE freelance_id = ?
    `
    const [{ affectedRows }] = pool.query(sql, [newTitle, newAbout, newSrviceLoaction, newType, freelanceId])
    return affectedRows
}

function getTitle(freelanceId) {
    const sql = `
    SELECT title 
    FROM freelancers
    WHERE freelance_id = ?
    `
    const [title] = pool.query(sql, [freelanceId])
    return title
}


function getAbout(freelanceId) {
    const sql = `
    SELECT about 
    FROM freelancers
    WHERE freelance_id = ?
    `
    const [about] = pool.query(sql, [freelanceId])
    return about
}


function getType(freelanceId) {
    const sql = `
    SELECT account_type 
    FROM freelancers
    WHERE freelance_id = ?
    `
    const [type] = pool.query(sql, [freelanceId])
    return type
}


function getServiceLoaction(freelanceId) {
    const sql = `
    SELECT service_loaction 
    FROM freelancers
    WHERE freelance_id = ?
    `
    const [serviceLocation] = pool.query(sql, [freelanceId])
    return serviceLocation
}

module.exports = {
    updateData
}