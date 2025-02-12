const { DataTypes } = require('sequelize');
const sequelize = require("../config/db")

const Users = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phonenumber: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
  role: {
    type: DataTypes.ENUM('admin', 'employee', 'company'),
    allowNull: false,
    defaultValue: 'employee'
  },
 
  otp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  otpExpiresAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  

  image: {
    type: DataTypes.STRING,  
    allowNull: true
  },
  isActive:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },confirmPassword:{
    type: DataTypes.STRING,  
    allowNull: true
  },
  newPassword:{
    type: DataTypes.STRING,  
    allowNull: true
  }
});

module.exports = Users;
