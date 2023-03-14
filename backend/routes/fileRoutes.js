const express = require('express')
const fileController = require('../controllers/fileController')

const fileRoutes = express.Router()


// GET all files
fileRoutes.get('/', fileController.getAllFiles)

//GET file
fileRoutes.get('/:id', fileController.getFile)

// POST file
fileRoutes.post('/', fileController.postFile)

// PATCH file
fileRoutes.patch('/:id', fileController.patchFile)

// DELETE file
fileRoutes.delete('/:id', fileController.deleteFile)

module.exports = fileRoutes