const express = require('express')
const router = express.Router()

// include model
const Workout = require('../models/Workout')

// get all
router.get('/', (req, res) => {
    res.json({mssg: 'GET All Data'})
})

// get single data
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get single data'})
})

// post single data
router.post('/add', async(req, res) => {
    // inisialisasi field yang dari database masukin ke req method
    const { title, reps, load } = req.body

    try{
        const workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}) 

// update all data
router.put('/update', (req, res) => {
    res.json({mssg: 'update all data'})
})

// update single data
router.patch('/update/:id', (req, res) => {
    res.json({mssg: 'update single data'})
})

// delete single data
router.delete('/delete/:id', (req, res) => {
    res.json({mssg: 'delete single data'})
})

module.exports = router