const express = require('express')
const router = express.Router()

router
    .route('/')
    .get(async (req, res) => {
        try {
            res.status(200)
                .send('Hi')
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

router
    .route('/')
    .post(async (req, res) => {
        try {
            res.status(200)
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
            res.status(200)
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
            res.status(200)
                .send('Hi')
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

router
    .route('/logIn')
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
    .route('/signUp')
    .post(async (req, res) => {
        try {
            res.status(201)
                .send('Hi')
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

module.exports = router