const Workout = require('../models/Workout') // include model
const mongoose = require('mongoose') // include database

// get all data
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({cratedAt: -1})

    res.status(200).json(workouts)
}

// get single data
const getWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({mssg: "No such workout"})
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(404).json({error: "No such workout!"})
    }

    res.status(200).json(workout)
}

// post data
const createWorkout = async (req, res) => {
    // inisialisasi field yang dari database masukin ke req method
    const { title, reps, load } = req.body

    // get docs to db
    try{
        const workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete data
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({mssg: "No such workout"})
    }

    const workout = await Workout.findByIdAndDelete({_id: id})

    if(!workout) {
        return res.status(404).json({mssg: "No such Workout"})
    }

    res.status(200).json(workout)
}

// update data
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({mssg: "No such workout"})
    }

    const workout = await Workout.findByIdAndUpdate({_id: id},  {
        ...req.body
    })

    if(!workout) {
        return res.status(404).json({mssg: "no such workout"})
    }

    res.status(200).json(workout)
}


module.exports = { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout }