const express = require('express')
const router = express.Router()

// include controller 
const { 
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
 } = require("../controllers/workoutController")

// get all
router.get('/', getWorkouts)

// get single data
router.get('/:id', getWorkout)

// post single data
router.post('/add', createWorkout) 

// update single data
router.patch('/update/:id', updateWorkout)

// delete single data
router.delete('/delete/:id', deleteWorkout)

module.exports = router