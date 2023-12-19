const express = require('express')
const { getFreelancersByCategory } = require('../dbOperations/users')
const { updateFreelance, getAbout } = require('../dbOperations/freelancers')
const { updateAddress } = require('../dbOperations/addresses')
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

router
    .route('/')
    .put(async (req, res) => {
        try {
            const { freelanceId, title, about, serviceLocation } = req.body
            const isEdited = await updateFreelance(freelanceId, title, about, serviceLocation)
            if (isEdited) {
                res.status(201)
                    .send('Succedded!')
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
    .route('/address')
    .put(async (req, res) => {
        try {
            const { userId, city, street, building, suite, zipCode } = req.body
            const isEdited = await updateAddress(userId, city, street, building, suite, zipCode)
            if (isEdited) {
                res.status(201)
                    .send('The change was made successfully')
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