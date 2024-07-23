const express = require('express');
const { getAllUsers } = require('../dbOperations/users');
const {authenticateToken} = require('../middleware/auth');
const router = express.Router()

router
    .route('/users')
    .get(authenticateToken, async (req, res) => {
        try {
            const users = await getAllUsers()
            if (users) {
                res.status(200)
                    .send(users)
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