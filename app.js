const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const session = require('express-session')

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

const configSession = {
    secret: process.env.COOKIES_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000, // 1h validity,
      secure : false  // only for local prodaction
    },
}

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(session(configSession))


// routes
app.use('/api/user', userRoutes)
app.use('/api/pub', postRoutes)
app.use('/api/comment', commentRoutes)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async (req,res) => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()