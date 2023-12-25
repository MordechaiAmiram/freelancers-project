const express = require('express')
const { getFreelance, updateFreelance } = require('../dbOperations/freelancers')
const router = express.Router()

router
    .route('/:freelanceId')
    .get(async (req, res) => {
        try {
            const freelance = await getFreelance(req.params.freelanceId)
            res.status(200)
                .send(freelance)
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })
router
    .route('/')
    .put(async (req, res) => {
        try {
            const { freelanceId, title, about, serviceLocation, type, isConfirmed, imageId } = req.body
            const isEdited = await updateFreelance(freelanceId, title, about, serviceLocation, type, isConfirmed, imageId)
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