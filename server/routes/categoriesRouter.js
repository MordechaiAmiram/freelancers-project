const express = require('express')
const router = express.Router()
const { getParentsCategories, getChildren, addCategory, updateCategory } = require('../dbOperations/categories')

router
    .route('/parents')
    .get(async (req, res) => {
        try {
            const categories = await getParentsCategories()
            res.status(200)
                .send(categories)
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

router
    .route('/:id')
    .get(async (req, res) => {
        try {
            const categories = await getChildren(req.params.id)
            res.status(200)
                .send(categories)
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

router
    .route('/')
    .post(async (req, res) => {
        try {
            const { name, parentId } = req.body
            const isSuccedded = await addCategory(name, parentId)
            if (isSuccedded) {
                res.status(201)
                    .send('Succeeded!')
            } else {
                res.status(400)
                    .send('Somthing went wrong')
            }
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })
router
    .route('/')
    .put(async (req, res) => {
        try {
            const { name, parentId, categoryId } = req.body
            const isSuccedded = await updateCategory(name, parentId, categoryId)
            if (isSuccedded) {
                res.status(201)
                    .send('Succeeded!')
            } else {
                res.status(400)
                    .send('Somthing went wrong')
            }
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })

module.exports = router