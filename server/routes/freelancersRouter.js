const express = require('express')
const { getFreelancersByCategory } = require('../dbOperations/users')
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
                .send('Hi')
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
                .send('Hi')
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

router
    .route('/')
    .put(async (req, res) => {
        try {
            res.status(201)
                .send('Hi')
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

module.exports = router