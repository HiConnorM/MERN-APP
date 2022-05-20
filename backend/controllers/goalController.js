const asyncHandler = require('express-async-handler')

// @desc    Get Goals
//@route    GET /api/goals 
//@acces    Private

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Goals'})
})

// @desc    set Goal
//@route    POST /api/goals 
//@acces    Private

const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add text fool')
    }

    res.status(200).json({message: 'Get Goals'})
})

// @desc    update Goal
//@route    POST /api/goals 
//@acces    Private

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}` })
})
// @desc    delete Goal
//@route    DELETE /api/goals/:id 
//@acces    Private

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal,
}