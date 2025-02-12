const userModel=require('../models/user');
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
    
}

