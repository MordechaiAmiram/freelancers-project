const express = require('express')
const router = express.Router()
const { getFreelancePortfolios } = require('../dbOperations/portfolios')

router
    .route('/:freelanceId')
    .get(async (req, res) => {
        try {
            const portfolios = await getFreelancePortfolios(req.params.freelancId)
            if (portfolios) {
                res.status(200)
                    .send(portfolios)
            } else {
                res.status(400)
                    .send('Bad request')
            }
        } catch (err) {
            console.error(err.message)
            res.status(500)
        }
    })

module.exports = router