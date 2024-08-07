const express = require('express')
const app = express()
const { createDbConnection } = require('./db')
const path = require('path')
const cors = require('cors')

const authRouter = require('./routes/authRouter')
const usersRouter = require('./routes/usersRouter')
const categoriesRouter = require('./routes/categoriesRouter')
const reviewsRouter = require('./routes/reviewsRouter')
const freelacersRouter = require('./routes/freelancersRouter')
const freelanceRouter = require('./routes/freelanceRouter')
const portfoliosRouter = require('./routes/portfoliosRouter')
const managementRouter = require('./routes/managementRouter')
const messagesRouter = require('./routes/messagesRouter')

app.use(express.json())
app.use(cors())

const clientBuildPath = 'C:/Users/moti5/Programming/GitHub/freelancers-project/client'

app.use(express.static(path.join(clientBuildPath, 'build')))

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/freelancers', freelacersRouter)
app.use('/api/freelance', freelanceRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/reviews', reviewsRouter)
app.use('/api/portfolios', portfoliosRouter)
app.use('/api/management', managementRouter)
app.use('/api/messages', messagesRouter)

app.get("/*", (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'build', "index.html"))
})

async function checkConnection() {
    const isConnected = await createDbConnection()
    if (isConnected) {
        const PORT = process.env.PORT || 4000
        app.listen(PORT, console.log(`Listen to port ${PORT}`))
    }
}
checkConnection()


