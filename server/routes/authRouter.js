const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { getAllUsers, addUserGate, getClient } = require('../dbOperations/users')
const secretKey = process.env.ACCESS_TOKEN_SECRET;

router
    .route('/log-in')
    .post(async (req, res) => {
        try {
            const [user, message, isValid] = await logInValidation(req.body.username, req.body.password)
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

async function logInValidation(username, pass) {
    const user = await findUser(username)
    if (!user || pass !== user.password) {
        return [null, 'Username or password incorrect', false]
    } else if (!user.isConfirmed) {
        return [null, 'User blocked', false]
    }
    return [user, null, true]
}

router
    .route('/sign-up')
    .post(async (req, res) => {
        try {
            const { isFreelance, firstName, lastName, username, email, phone, password, city, street, building, suite, zipCode, about, title, accountType, serviceLocation, categoryId, imageId } = req.body
            const [message, isValid] = await signUpValidation(username, password)
            
            if (isValid) {
                const userId = await addUserGate(isFreelance, firstName, lastName, username, email, phone, password, city, street, building, suite, zipCode, about, title, accountType, serviceLocation, categoryId, imageId)
                
                if (userId) {
                    const user = await getClient(username, password)
                    const token = jwt.sign({id: user.userId, username: user.username, role: 'basic' }, secretKey, { expiresIn: '1h' })
                    res.status(201)
                        .json({ token, user })
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

async function signUpValidation(username, pass) {
    const user = await findUser(username)
    if (user?.password === pass) {
        return ['log in', false]
    }
    else if (user) {
        return ['username in use', false]
    }
    return [null, true]
}

async function findUser(username) {
    const users = await getAllUsers()
    return await users.find(user => user.username === username)
}

module.exports = router