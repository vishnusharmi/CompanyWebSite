const Earning = require("../models/Earning");
const earningService = require("../services/earning-service")
// Create Earning
const createEarning = async (req, res) => {
    try {
       const earning = await earningService.createEarnings(req.body)
        res.status(200).json({
            success: true,
            message: "Earning created",
            earning
        });
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}

// Get All Earning
const getAllEarnings = async (req, res) => {
    try {
      const earnings = await earningService.getAllEarings()
        res.status(200).json({
            success: true,
            message: "Earnings data",
            earnings
        });
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}

// Get Earning by ID
const getEarningById = async (req, res) => {
    try {
        const earning = await earningService.getAllEarings(req.params.id)
        res.status(200).json({
            success: true,
            message: "Earning data",
            earning
        });
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}

// Update Earning
const updateEarning = async (req, res) => {
    try {
        const update = await  earningService.updateEarning(req.params.id)
        res.status(200).json({
            success: true,
            message: "Earning updated",
            update
        });
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}

// Delete Earning
const deleteEarning = async (req, res) => {
    try {
        const earning = await earningService.deleteEarning(req.params.id)
        res.status(200).json({
            success: true,
            message: "Earning deleted",
            earning
        });
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}

module.exports = { createEarning, getAllEarnings, getEarningById, updateEarning, deleteEarning };