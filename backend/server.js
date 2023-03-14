// :)

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const streamerRoutes = require('./routes/streamerRoutes')
const fileRoutes = require('./routes/fileRoutes')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.use('/api/streamers', streamerRoutes)
app.use('/api/files', fileRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(
        app.listen(process.env.PORT, () => {
            console.log(`connected to MongoDB & listening on port ${process.env.PORT}`)
        })
    )
    .catch((error) => console.log(error))
