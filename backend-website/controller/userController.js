const User = require("../models/User");
const userServices =  require('../services/user-service')
//create user
const addUser = async(req,res) =>{
    try {
       const createUser = await userServices.createUser(req.body)
        res.status(200).json({
            success : true,
            message : "User created",
            createUser
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
   
}

//get all user
const getAllUser = async(req,res) => {
    try {
        const allUsers = await userServices.getAllUsers()
        res.status(200).json({
            success : true,
            message : "User data",
            allUsers
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}

//get user by id
const getUserById = async(req,res) => {
    try {
       const userById = await userServices.getUserById(req.params.id)
        res.status(200).json({
            success : true,
            message : "User data",
            userById
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}

//update user
const updateUser = async(req,res) => {
    try {
      const updateUser = await userServices.updateUser(req.params.id)
        
        res.status(200).json({
            success : true,
            message : "User data",
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}

//delete user
const deleteUser = async(req,res) => {
    try {
        const deleteUser = await userServices.deleteUser(req.params.id)
        res.status(200).json({
            success : true,
            message : "User deleted",
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}

module.exports = {addUser,getAllUser,getUserById,updateUser,deleteUser}