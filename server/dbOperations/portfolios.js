const { pool } = require('../db')

async function getFreelancePortfolios(freelanceId) {
    const sql = `
    SELECT
    p.portfolio_id as portfolioId,
    p.title,
    p.description,
    p.project_url as projectUrl,
    p.creation_date as creationDate,
    GROUP_CONCAT(i.image_code) AS imageCodes,
    GROUP_CONCAT(i.image_id) AS imageIds
    FROM
        freelancers_portfolios p
    LEFT JOIN
        portfolio_images i ON p.portfolio_id = i.portfolio_id
    WHERE
        p.freelance_id = ?
    GROUP BY
    p.portfolio_id;
    `
    const [portfilios] = await pool.query(sql, [freelanceId])
    return portfilios
}

async function createPortfolio(freelanceId, title, description, projectUrl) {
    const sql = `
    INSERT INTO freelancers_portfolios (
        freelance_id, title, description, project_url, creation_date)
    VALUES (?, ?, ?, ?,  CURDATE());
    `
    const [{ affectedRows }] = await pool.query(sql, [freelanceId, title, description, projectUrl])
    return affectedRows
}

async function addImage(portfolioId, imageCode) {
    const sql = `
    INSERT INTO portfolio_images (portfolio_id, image_code)
    VALUES(?, ?)
    `
    const [result] = await pool.query(sql, [portfolioId, imageCode]);
    const insertedId = result.insertId;
    return insertedId;
}

async function deleteImage(imageId) {
    const sql = `
    DELETE FROM portfolio_images
    WHERE image_id = ?
    ` 
    const [{ affectedRows }] = await pool.query(sql, [imageId])
    return affectedRows
}

module.exports = {
    getFreelancePortfolios,
    createPortfolio,
    addImage,
    deleteImage
}