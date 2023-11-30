require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

// Routes
const workoutRoutes = require('./routes/workout')

const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// pake route nya (endpoint)
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listening server 
        app.listen(process.env.PORT, () => {
            console.log(`test server on port`, process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

