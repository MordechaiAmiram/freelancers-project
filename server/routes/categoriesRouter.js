const express = require('express')
const router = express.Router()
const { getParentsCategories, getChildren, addCategory, updateCategory, getCategory, searchForCategory } = require('../dbOperations/categories')

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
    .route('/children/:id')
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
    .route('/:id')
    .get(async (req, res, next) => {
        try {
            if (req.params.id === 'search') return next()
            const [category] = await getCategory(req.params.id)
            res.status(200)
                .send(category)
        } catch (err) {
            res.status(400)
                .send(err.message)
        }
    })
router
    .route('/search')
    .get(async (req, res) => {
        try {
            console.log(req.headers.text);
            const data = await searchForCategory(`% ${req.headers.text} %`)
            if (data) {
                res.status(200)
                    .send(data)
            } else {
                res.status(400)
                    .send('Bad request')
            }
        } catch (err) {
            res.status(400)
                .send('Bad request')
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