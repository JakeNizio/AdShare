const express = require('express')
const streamerController = require('../controllers/streamerController')

const streamerRoutes = express.Router()

// GET all streamers
streamerRoutes.get('/', streamerController.getAllStreamers)

// GET range streamers
streamerRoutes.get('/range', streamerController.getRangeStreamers)

// GET streamer
streamerRoutes.get('/:id', streamerController.getStreamer)

// POST streamer
streamerRoutes.post('/', streamerController.postStreamer)

// PATCH streamer
streamerRoutes.patch('/:id', streamerController.patchStreamer)

// DELETE streamer
streamerRoutes.delete('/:id', streamerController.deleteStreamer)

module.exports = streamerRoutes