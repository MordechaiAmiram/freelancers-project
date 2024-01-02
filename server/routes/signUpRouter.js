const express = require('express')
const router = express.Router()
const { addUserGate, getAllUsers, getClient } = require('../dbOperations/users')

router
    .route('/')
    .post(async (req, res) => {
        try {
            const { isFreelance, firstName, lastName, username, email, phone, password, city, street, building, suite, zipCode, about, title, accountType, serviceLocation, categoryId, imageId } = req.body
            const [message, isValid] = await validation(username, password)
            
            if (isValid) {
                const userId = await addUserGate(isFreelance, firstName, lastName, username, email, phone, password, city, street, building, suite, zipCode, about, title, accountType, serviceLocation, categoryId, imageId)

                if (userId) {
                    const user = await getClient(username, password)
                    res.status(201)
                        .send(user)
                }
            } else {
                res.status(400)
                    .send(message)
            }
        } catch (err) {
            console.log(err);
            res.status(500)
        }
    })

async function validation(username, pass) {
    const users = await getAllUsers()
    const user = await users.find(user => user.username === username)
    if (user?.password === pass) {
        return ['log in', false]
    }
    else if (user) {
        return ['username in use', false]
    }
    return [null, true]
}

module.exports = router