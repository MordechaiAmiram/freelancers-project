const express = require('express')
const signUpRouter = require('./signUpRouter')
const logInRouter = require('./logInRouter')
const { getClient, updateUserDetails, getSumOfUsers, getUnconfirmedUsers } = require('../dbOperations/users')
const {authenticateToken, authOwner, authOwnerOrAdmin, authAdmin} = require('../middleware/auth')
const router = express.Router()

router
    .route('/')
    .get(async (req, res) => {
        try {
            const { username, password } = req.headers
            const client = await getClient(username, password)
            if (client) {
                res.status(200)
                    .send(client)
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
    .route('/sum')
    .get(authenticateToken, authAdmin, async (req, res) => {
        try {
            const sum = await getSumOfUsers()
            if (sum) {
                res.status(200)
                    .json(sum)
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
    .route('/on-hold')
    .get(authenticateToken, authAdmin, async (req, res) => {
        try {
            const freelancers = await getUnconfirmedUsers()
            res.status(200)
                .send(freelancers)
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

router
    .route('/')
    .delete(authenticateToken, async (req, res) => {
        try {
            res.status(200)
                .send('waiting to be implemented...')
        } catch (err) {
            console.log(err.message);
            res.status(500)
        }
    })

router
    .route('/')
    .put(authenticateToken, authOwnerOrAdmin, async (req, res) => {
        try {
            const { userId, firstName, lastName, email, phone, password, isConfirmed } = req.body
            const isUpdated = await updateUserDetails(userId, firstName, lastName, email, phone, password, isConfirmed)
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

router.use('/log-in', logInRouter)
router.use('/sign-up', signUpRouter)

module.exports = router