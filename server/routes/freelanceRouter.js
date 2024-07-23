const express = require('express')
const { getFreelance, updateFreelance } = require('../dbOperations/freelancers')
const { updateAddress } = require('../dbOperations/addresses')
const {authenticateToken} = require('../middleware/auth')
const router = express.Router()

router
    .route('/:freelanceId')
    .get(async (req, res) => {
        try {
            const freelance = await getFreelance(req.params.freelanceId)
            if (freelance) {
                res.status(200)
                    .send(freelance)
            } else {
                res.status(400)
                    .send('Freelance does not exist')
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
            const { freelanceId, title, about, serviceLocation, type, imageId } = req.body
            const isEdited = await updateFreelance(freelanceId, title, about, serviceLocation, type, imageId)
            if (isEdited) {
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

router
    .route('/address')
    .put(authenticateToken, async (req, res) => {
        try {
            const { userId, city, street, building, suite, zipCode } = req.body
            const isEdited = await updateAddress(userId, city, street, building, suite, zipCode)
            if (isEdited) {
                res.status(201)
                    .send('Succeeded!')
            } else {
                res.status(400)
                    .send('Bad request')
            }
        } catch (err) {
            console.log(res.message);
            res.status(500)
        }
    })

module.exports = router