const userModel=require('../models/User');
const { Op } = require('sequelize');


exports.findByEmail=async(email)=>{

const emailData=await userModel.findOne({ where: { email } });
return emailData;

}

exports.registerUser=async(data)=>{
    const userData=await userModel.create(data);
    return userData;
}

exports.findUserByValidOTP=async({email,otp})=>{
    const userData= await userModel.findOne({email,otp,otpExpiresAt: { [Op.gt]: new Date() }});
    return userData;// OTP must not be expired})
    
};


//to get all users
exports.getAllUsers = async () => {
    try {
        const allUsers = await userModel.findAll();
        return allUsers;

    } catch (error) {
        console.log(error);
        
    }
};

//to get user by id
exports.getSingleUserById = async (id) => {
    try {
        const userById = await userModel.findByPk(id);
        if(!userById){
            throw new Error("uses not found");
            
        }

        return userById
    } catch (error) {
        console.log(error);
        
    }    
};

//update user
exports.updateUser = async (id) => {
    try {
        const updateUserById = await userModel.findByPk(id);
        if(!updateUserById){
            throw new Error("user not found");
        }
        const updatedUser = await updateUserById.update();
        return updatedUser
        
    } catch (error) {
        console.log(error);
        
    }
};


//delete User
exports.deleteUser = async (id) => {
    try {
        const deleteUserById = await userModel.findByPk(id)
        if(!deleteUserById){
            throw new Error("user not found");
            
        };

        const deletedUser = await deleteUserById.destroy();
        return deletedUser;
    } catch (error) {
        console.log(error);
        
    }
    
}

