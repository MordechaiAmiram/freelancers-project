const express = require('express')
const { getFreelanceReviews, getReviewerReviews, addReview, updateReview, deleteReview } = require('../dbOperations/reviews')
const {authenticateToken, authOwner, authAdmin} = require('../middleware/auth')
const router = express.Router()

router
    .route('/by-freelance/:freelanceId')
    .get(async (req, res) => {
        try {
            const reviews = await getFreelanceReviews(req.params.freelanceId)
            res.status(200)
                .send(reviews)
        } catch (err) {
            console.log(err.message);
            res.status(500)
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
            console.log(err.message);
            res.status(500)
        }
    })

router
    .route('/')
    .post(authenticateToken, async (req, res) => {
        try {
            const { text, rating, reviewerId, freelanceId } = req.body
            const freelanceRating = await addReview(text, rating, reviewerId, freelanceId)
            if (freelanceRating) {
                res.status(201)
                    .send(freelanceRating)
            } else {
                res.status(400)
                    .send('Bad request')
            }
        } catch (err) {
            console.log(err.message);
            res.status(500)
        }
    })

router
    .route('/')
    .delete(authenticateToken, authAdmin, async (req, res) => {
        try {
            const freelanceRating = await deleteReview(req.body.reviewId)
            if (freelanceRating) {
                res.status(201)
                    .send(freelanceRating)
            } else {
                res.status(400)
                    .send('Bad requst')
            }
        } catch (err) {
            console.log(err.message);
            res.status(500)
        }
    })

router
    .route('/')
    .put(authenticateToken, async (req, res) => {
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
            console.log(err.message);
            res.status(500)
        }
    })

module.exports = router