const User = require('../models/User')


exports.createUser = async(data) =>{
    try {
        const user = await User.create(data);
        return user
    } catch (error) {
        console.log(error)
    }
}

exports.getAllUsers = async() =>{
    try {
        const user = await User.findAll({});
        return user
    } catch (error) {
        console.log(error)
    }
}

exports.getUserById = async(id) =>{
    try {
        const user = await User.findByPk(id);
        return user
    } catch (error) {
        console.log(error)
    }
}

exports.updateUser = async(id) =>{
    try {
         const user = await User.findByPk(id);
         if(!user){
            return res.status(404).json({error: "User not found "})
         }
         const userUpdated = await user.update()
        return userUpdated
    } catch (error) {
        console.log(error)
    }
}

exports.deleteUser = async (id) =>{
    try {
        const deleteuser = await User.findByPk(id);
        const deletedUser = await deleteuser.destroy()
        return deletedUser
    } catch (error) {
        console.log(error)
    }
}