const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const { getAllUsers } = require('../dbOperations/users')
const secretKey = process.env.JWT_SECRET_KEY;


router
    .route('/')
    .post(async (req, res) => {
        try {
            const [user, message, isValid] = await validation(req.body.username, req.body.password)
            if (!isValid) {
                res.status(401)
                    .send(message)
            }
            else {
                const token = jwt.sign({ id: user.userId, username: user.username, role: user.isAdmin? 'admin': 'basic' }, secretKey, { expiresIn: '1h' })
                res.status(201)
                    .json({ token, user })
            }
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

async function validation(username, pass) {
    const users = await getAllUsers()
    const user = await users.find(user => user.username === username)
    if (!user || pass !== user.password) {
        return [null, 'Username or password incorrect', false]
    } else if (!user.isConfirmed) {
        return [null, 'User blocked', false]
    }
    return [user, null, true]
}

module.exports = router