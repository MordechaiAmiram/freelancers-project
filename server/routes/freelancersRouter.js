const express = require('express')
const { getFreelancersByCategory, getFreelance } = require('../dbOperations/freelancers')
const { updateFreelance } = require('../dbOperations/freelancers')
const { updateAddress } = require('../dbOperations/addresses')
const { getFreelanceRating } = require('../dbOperations/ratingData')
const router = express.Router()

router
    .route('/:categoryId')
    .get(async (req, res) => {
        try {
            const freelancers = await getFreelancersByCategory(req.params.categoryId)
            res.status(200)
                .send(freelancers)
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

router
    .route('/')
    .post(async (req, res) => {
        try {
            res.status(201)
                .send('waiting to be implemented...')
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

router
    .route('/')
    .delete(async (req, res) => {
        try {
            res.status(201)
                .send('waiting to be implemented...')
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

module.exports = router