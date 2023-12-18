const express = require('express')
const { getFreelanceReviews, getReviewerReviews, addReview, updateReview } = require('../dbOperations/reviews')
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
            const { text, rating, reviewerId, freelanceId } = req.body
            const isAdded = await addReview(text, rating, reviewerId, freelanceId)
            if (isAdded) {
                res.status(201)
                    .send('Succeeded!')
            } else {
                res.status(400)
                    .send('Bad request')
            }
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
            const { text, rating, reviewId } = req.body
            const isUpdated = await updateReview(reviewId, text, rating)
            if (isUpdated) {
                res.status(201)
                    .send('Succeeded!')
            } else {
                res.status(400)
                    .send('Bad request')
            }
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

module.exports = router