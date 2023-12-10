const express = require('express')
const router = express.Router()

router
    .route('/')
    .get(async (req, res) => {
        try {
            res.status(200)
                .send('Hi')
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })
    
router
    .route('/:id')
    .get(async (req, res) => {
        try {
            res.status(200)
                .send('Hi')
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

module.exports = router