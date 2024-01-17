const express = require('express')
const router = express.Router()
const { getParentsCategories, getChildren, addCategory, updateCategory, getCategory, searchForCategory } = require('../dbOperations/categories')

router
    .route('/parents')
    .get(async (req, res) => {
        try {
            const categories = await getParentsCategories()
            if (categories) {
                res.status(200)
                    .send(categories)
            } else {
                res.status(404)
                    .send('Categories do not exist')
            }
        } catch (err) {
            console.log(err.message)
            res.status(500)
        }
    })

router
    .route('/children/:id')
    .get(async (req, res) => {
        try {
            const categories = await getChildren(req.params.id)
            if (categories) {
                res.status(200)
                    .send(categories)
            } else {
                res.status(404)
                    .send('Categories do not exist')
            }
        } catch (err) {
            console.log(err.message)
            res.status(500)
        }
    })
router
    .route('/:id')
    .get(async (req, res, next) => {
        try {
            if (req.params.id === 'search') return next()
            const [category] = await getCategory(req.params.id)
            if (category) {
                res.status(200)
                    .send(category)
            } else {
                res.status(404)
                    .send('Category does not exist')
            }
        } catch (err) {
            console.log(err.message)
            res.status(500)
        }
    })
router
    .route('/search')
    .get(async (req, res) => {
        try {
            const data = await searchForCategory(req.query.text)
            if (data) {
                res.status(200)
                    .send(data)
            } else {
                res.status(404)
                    .send('Categories do not found')
            }
        } catch (err) {
            console.log(err.message)
            res.status(500)
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
            console.log(err.message)
            res.status(500)
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
            console.log(err.message)
            res.status(500)
        }
    })

module.exports = router