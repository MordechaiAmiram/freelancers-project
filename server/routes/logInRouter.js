const express = require('express')
const router = express.Router()
const { getAllUsers } = require('../dbOperations/users')

router
    .route('/')
    .post(async (req, res) => {
        try {
            const [user, message, isValid] = await validation(req.body.username, req.body.password)
            console.log(user);
            if (!isValid) {
                res.status(400)
                    .send(message)
            }
            else {
                res.status(201)
                    .json(user)
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
        return [null, 'This user does not exsist, please register', false]
    }
    else if (pass !== user.password) {
        return [null, 'Wrong password', false]
    }
    return [user, null, true]
}

module.exports = router