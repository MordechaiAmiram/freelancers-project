const { pool } = require('../db')

async function getFreelancePortfolios(freelanceId) {
    const sql = `
    SELECT
    p.portfolio_id as portfolioId,
    p.title,
    p.description,
    p.project_url as projectUrl,
    p.creation_date as creationDate,
    GROUP_CONCAT(i.image_url) AS imageUrls
    FROM
        freelancers_portfolios p
    LEFT JOIN
        portfolio_images i ON p.portfolio_id = i.portfolio_id
    WHERE
        p.freelancer_id = ?
    GROUP BY
    p.portfolio_id;
    `
    const [portfilios] = await pool.query(sql, [freelanceId])
    return portfilios
}

module.exports = {
    getFreelancePortfolios
}