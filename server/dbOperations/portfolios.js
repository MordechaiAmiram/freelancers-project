const { pool } = require('../db')

async function getFreelancePortfolios(freelanceId) {
    const sql = `
    SELECT
    p.portfolio_id as portfolioId,
    p.title,
    p.description,
    p.project_url as projectUrl,
    p.creation_date as creationDate,
    GROUP_CONCAT(i.image_code) AS imageCodes
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

async function createPortfolio( freelanceId, title, description, projectUrl ) {
    const sql = `
    INSERT INTO freelancers_portfolios (
        freelance_id, title, description, project_url, creation_date)
    VALUES (?, ?, ?, ?,  CURDATE());
    `
    const [{ affectedRows }] = await pool.query(sql, [freelanceId, title, description, projectUrl])
    return affectedRows
}

module.exports = {
    getFreelancePortfolios,
    createPortfolio
}