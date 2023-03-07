const express = require('express')
const app = express()
const cors = require('cors')

// connectDB
const { connectDB } = require('./db/connectDB')
require('dotenv').config()

// error routes
const { notFound } = require('./middlewares/not-found')
const { errorHandlerMiddleware } = require('./middlewares/error-handler')

// resource route
const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')
const commentRoutes = require('./routes/comment')


app.use(express.json())
app.use(cors())

// routes
app.use('/api/user', userRoutes)
app.use('/api/pub', postRoutes)
app.use('/api/comment', commentRoutes)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8080

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()