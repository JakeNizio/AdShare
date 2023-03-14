const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    remainingPlays: {
        type: Number,
        required: true
    }
}, {timestamps: true})

const fileModel = mongoose.model('fileModel', fileSchema)

module.exports = fileModel