const express = require('express')
const { getFreelancersByCategory, getUnconfirmedFreelancers } = require('../dbOperations/freelancers')

const router = express.Router()

router
    .route('/:categoryId')
    .get(async (req, res, next) => {
        try {
            if (isNaN(req.params.categoryId)) return next()
            const freelancers = await getFreelancersByCategory(req.params.categoryId)
            res.status(200)
                .send(freelancers)
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

router
    .route('/on-hold')
    .get(async (req, res) => {
        try {
            const freelancers = await getUnconfirmedFreelancers()
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