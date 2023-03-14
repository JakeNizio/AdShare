const mongoose = require('mongoose')

const streamerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    viewers: {
        type: Number,
        required: true,
        default: 0
    },
    followers: {
        type: Number,
        required: true,
        default: 0
    },
    streamTitle: {
        type: String,
        required: true,
        default: ""
    },
    stack: {
        type: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref:'fileModel'
            }],
        default: [],
        required: true
    }
}, {timestamps: true})

const streamerModel = mongoose.model('streamerModel', streamerSchema)

module.exports = streamerModel