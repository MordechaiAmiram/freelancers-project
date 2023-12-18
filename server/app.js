const express = require('express')
const app = express()
const { createDbConnection } = require('./db')
const path = require('path')
const cors = require('cors')

const usersRouter = require('./routes/usersRouter')
const categoriesRouter = require('./routes/categoriesRouter')
const reviewsRouter = require('./routes/reviewsRouter')
const freelacersRouter = require('./routes/freelancersRouter')

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'client', 'build')))

app.use('/api/users', usersRouter)
app.use('/api/freelancers', freelacersRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/reviews', reviewsRouter)

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', "index.html"))
})

async function checkConnection() {
    const isConnected = await createDbConnection()
    if (isConnected) {
        const PORT = process.env.PORT || 4000
        app.listen(PORT, console.log(`Listen to port ${PORT}`))
    }
}
checkConnection()


