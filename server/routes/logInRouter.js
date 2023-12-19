const express = require('express')
const router = express.Router()
const { getAllUsers } = require('../dbOperations/users')

router
    .route('/')
    .post(async (req, res) => {
        try {
            const user = await validation(req.body.username, req.body.password)
            if (!user[1]) {
                res.status(400)
                    .send(user[0])
            }
            else {
                res.status(201)
                    .json(user[0])
            }
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

async function validation(username, pass) {
    const users = await getAllUsers()
    const user = await users.find(user => user.username === username)
    if (!user) {
        return ['This user does not exsist, please register', false]
    }
    else if (pass !== user.password) {
        return ['Wrong password', false]
    }
    return [user, true]
}

module.exports = router