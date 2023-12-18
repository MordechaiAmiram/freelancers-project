const express = require('express')
const signUpRouter = require('./signUpRouter')
const logInRouter = require('./logInRouter')
const { getAllUsers, getClient, addUserGate, updateUserDetails } = require('../dbOperations/users')
const router = express.Router()

router
    .route('/')
    .get(async (req, res) => {
        try {
            const { username, password } = req.headers
            const client = await getClient(username, password)
            res.status(200)
                .send(client)
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

router
    .route('/')
    .get(async (req, res) => {
        try {
            const users = await getAllUsers()
            res.status(200)
                .send(users)
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
            const { firstName, lastName, email, phone, password } = req.body
            const isUpdated = await updateUserDetails(firstName, lastName, email, phone, password)
            if (isUpdated) {
                res.status(200)
                    .send('Hi')
            } else {

            }
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

router.use('/log-in', logInRouter)
router.use('/sign-up', signUpRouter)

module.exports = router