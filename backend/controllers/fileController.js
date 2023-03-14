const fileModel = require('../models/fileModel')
const mongoose = require('mongoose')

const fileNotFound = 'File not found...'

// GET all files from DB
const getAllFiles = async (req, res) => {
    try {
        const response = await fileModel.find().sort({createdAt: -1})
        res.status(200).json(response)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// GET file from DB
const getFile = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: fileNotFound})
    }

    try {
        const response = await fileModel.findById(id)

        if (!response) {
            return res.status(404).json({error: fileNotFound})
        }

        res.status(200).json(response)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// POST file to DB
const postFile = async (req, res) => {
    const { name, path, remainingPlays } = req.body

    let missingFields = []

    if (!name) {
         missingFields.push('name')
    }
    if (!path) {
        missingFields.push('path')
    }
    if(!remainingPlays) { 
        missingFields.push('remainingPlays')
    }

    if (missingFields.length > 0) {
        return res.status(400).json({error: "Please fill in required fields", missingFields})
    }

    try {
        const response = await fileModel.create({name, path, remainingPlays})
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// PATCH file in DB
const patchFile = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: fileNotFound})
    }

    try {
        const response = await fileModel.findByIdAndUpdate(id, ...req.body)
        
        if (!response) {
            res.status(404).json({error: fileNotFound})
        }

        return res.status(200).json(response)
        
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

// DELETE file in DB
const deleteFile = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: fileNotFound})
    }

    try {
        const response = await fileModel.findByIdAndDelete(id)

        if (!response) {
            return res.status(404).json({error: fileNotFound})
        }
        
        res.status(200).json(response)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {getAllFiles, getFile, postFile, patchFile, deleteFile}