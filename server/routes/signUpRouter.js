const express = require('express')
const router = express.Router()
const { addUserGate, getAllUsers } = require('../dbOperations/users')

router
    .route('/')
    .post(async (req, res) => {
        try {
            const { isfreelance, firstname, lastname, username, email, phone, password, city, street, building, suite, zipCode, about, title, accountType, serviceLocation, categoryId } = req.body
            const isValid = await validation(username, password)
            if (isValid[1]) {
                const userId = await addUserGate(isfreelance, firstname, lastname, username, email, phone, password, city, street, building, suite, zipCode, about, title, accountType, serviceLocation, categoryId)
                const user = {
                    userId: userId,
                    firstname: firstname,
                    lastname: lastname,
                    username: username,
                }
                res.status(201)
                    .send(user)
            }
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

async function validation(username, pass) {
    const users = await getAllUsers()
    const user = await users.find(user => user.username === username)
    if (user.password === pass) {
        return ['log in', false]
    }
    else if (user) {
        return ['username in use', false]
    }
    return [user, true]
}

module.exports = router