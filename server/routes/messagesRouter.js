const express = require('express');
const { getMessagesBySender, getMessagesByReceiver } = require('../dbOperations/messages');
const router = express.Router()

router
    .route('/by-receiver/:userId')
    .get(async (req, res) => {
        try {
            const messages = await getMessagesByReceiver(req.params.userId)
            if (messages) {
                res.status(200)
                    .send(messages)
            } else {
                res.status(400)
                    .send('Bad request')
            }
        } catch (err) {
            console.error(err.message);
            res.status(500)
        }
    })
router
    .route('/by-sender/:userId')
    .get(async (req, res) => {
        try {
            const messages = await getMessagesBySender(req.params.userId)
            if (messages) {
                res.status(200)
                    .send(messages)
            } else {
                res.status(400)
                    .send('Bad request')
            }
        } catch (err) {
            console.error(err.message);
            res.status(500)
        }
    })
module.exports = router