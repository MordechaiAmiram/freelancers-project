const express = require('express')
const { getFreelanceReviews, getReviewerReviews } = require('../dbOperations/reviews')
const router = express.Router()

router
    .route('/by-freelance/:freelanceId')
    .get(async (req, res) => {
        try {
            const reviews = await getFreelanceReviews(req.params.freelanceId)
            res.status(200)
                .send(reviews)
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

router
    .route('/by-reviewer/:reviewerId')
    .get(async (req, res) => {
        try {
            const reviews = await getReviewerReviews(req.params.reviewerId)
            res.status(200)
                .send(reviews)
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