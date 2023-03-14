const streamerModel = require('../models/streamerModel')
const mongoose = require('mongoose')

const streamerNotFound = 'Streamer(s) not found...'

// GET all streamers from DB
// const getAllStreamers = async (req, res) => {
//     try {
//         const response = await streamerModel.find().sort({createdAt: -1})
//         res.status(200).json(response)

//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// }

const getAllStreamers = async (req, res) => {
    try {
        const response = await streamerModel.find().sort({createdAt: -1})
        res.status(200).json(response)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getRangeStreamers = async (req, res) => {
    const {attribute, min, max} = req.query
    const query = {[attribute]: {$gte: min, $lt: max}}

    if (!Object.keys(streamerModel.schema.paths).find((key) => key === attribute)) {
        return (res.status(404).json({error: streamerNotFound}))
    }

    try {
        const response = await streamerModel.find(query).sort({createdAt: -1})
        res.status(200).json(response)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// GET streamer from DB
const getStreamer = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: streamerNotFound})
    }

    try{
        const response = await streamerModel.findById(id)
        console.log(response)
        if (!response) {
            return res.status(404).json({error: streamerNotFound})
        }

        res.status(200).json(response)

    } catch (error) {
        res.status(400).json({error: error.response})
    }
}

// POST streamer to DB
const postStreamer = async (req, res) => {
    const { name, viewers, followers, streamTitle } = req.body

    let missingFields = []

    if (!name) {
        missingFields.push('name')
    }
    if (!viewers) {
        missingFields.push('viewers')
    }
    if (!followers) {
        missingFields.push('followers')
    }
    if (!streamTitle) {
        missingFields.push('streamTitle')
    }

    if (missingFields.length > 0) {
        return res.status(400).json({error: "Please fill in required fields", missingFields})
    }

    try {
        const response = await streamerModel.create({name, viewers, followers, streamTitle})
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// PATCH streamer in DB
const patchStreamer = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: streamerNotFound})
    }

    try {
        const response = await streamerModel.findByIdAndUpdate(id, {...req.body})
        if (!response) {
            return res.status(404).json({error: streamerNotFound})
        }
        res.status(200).json(response)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE streamer from DB
const deleteStreamer = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: streamerNotFound})
    }

    try {
        const response = await streamerModel.findByIdAndDelete(id)

        if (!response) {
            return res.status(404).json({error: streamerNotFound})            
        }

        res.status(200).json(response)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { getAllStreamers, getRangeStreamers, getStreamer, postStreamer, patchStreamer, deleteStreamer }