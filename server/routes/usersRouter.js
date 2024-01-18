const express = require('express')
const signUpRouter = require('./signUpRouter')
const logInRouter = require('./logInRouter')
const { getAllUsers, getClient, updateUserDetails, getSumOfUsers } = require('../dbOperations/users')
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
    .get(async (req, res) => {
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

// router
//     .route('/')
//     .get(async (req, res) => {
//         try {
//             const users = await getAllUsers()
//             if (users) {
//                 res.status(200)
//                     .send(users)
//             } else {
//                 res.status(400)
//                     .send('Bad request')
//             }
//         } catch (err) {
//             console.log(err.message);
//             res.status(500)
//         }
//     })

router
    .route('/')
    .delete(async (req, res) => {
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
    .put(async (req, res) => {
        try {
            const { userId, firstName, lastName, email, phone, password } = req.body
            const isUpdated = await updateUserDetails(userId, firstName, lastName, email, phone, password)
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