const express = require('express')
const { getFreelancersByCategory } = require('../dbOperations/users')
const { updateFreelance, getAbout } = require('../dbOperations/freelancers')
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

module.exports = router