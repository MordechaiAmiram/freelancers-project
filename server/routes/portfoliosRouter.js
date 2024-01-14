const express = require('express')
const router = express.Router()
const { getFreelancePortfolios, createPortfolio } = require('../dbOperations/portfolios')

router
    .route('/:freelanceId')
    .get(async (req, res) => {
        try {
            const portfolios = await getFreelancePortfolios(req.params.freelanceId)
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
router
    .route('/')
    .post(async (req, res) => {
        try {
            const { freelanceId, title, description, projectUrl } = req.body
            const isCreated = await createPortfolio(freelanceId, title, description, projectUrl)
            if (isCreated) {
                res.status(201)
                    .send('Portfolio was created')
            } else {
                res.status(400)
                    .send('Bad request')
            }
        } catch (err) {
            console.log(err.message)
            res.status(500)
        }
    })

module.exports = router