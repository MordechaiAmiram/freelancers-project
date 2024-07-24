const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const { addUserGate, getClient, getUsersForAuth } = require('../dbOperations/users')
const secretKey = process.env.ACCESS_TOKEN_SECRET;

router
    .route('/log-in')
    .post(async (req, res) => {
        try {
            const [userId, message, isValid] = await logInValidation(req.body.username, req.body.password)
            if (!isValid) {
                res.status(401)
                .send(message)
            }
            else {
                const user = await getClient(userId)
                const accessToken = generateAccessToken({ id: user.userId, username: user.username, role: user.isAdmin? 'admin': 'basic' })
                res.status(201)
                    .json({ accessToken, user })
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
    return [user.userId, null, true]
}

router
    .route('/sign-up')
    .post(async (req, res) => {
        try {
            const { isFreelance, firstName, lastName, username, email, phone, password, city, street, 
                building, suite, zipCode, about, title, accountType, serviceLocation, categoryId, imageId } = req.body
            const [message, isValid] = await signUpValidation(username, password)
            
            if (isValid) {
                const userId = await addUserGate(isFreelance, firstName, lastName, username, email, phone, password, 
                    city, street, building, suite, zipCode, about, title, accountType, serviceLocation, categoryId, imageId)
                
                if (userId) {
                    const user = await getClient(userId)
                    const accessToken = generateAccessToken({id: user.userId, username: user.username, role: 'basic' })
                    res.status(201)
                        .json({ accessToken, user })
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
    const users = await getUsersForAuth()
    return await users.find(user => user.username === username)
}

function generateAccessToken(user) {
    return jwt.sign(user, secretKey, { expiresIn: '1h' });
};

module.exports = router