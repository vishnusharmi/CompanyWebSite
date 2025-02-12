const { DataTypes } = require("sequelize");
const sequelize = require("../config/db")

const Users = sequelize.define('users', {
  id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    full_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    phone:{
        type: DataTypes.INTEGER
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    roleId: {
        type: DataTypes.INTEGER
    },
    roleName :{
        type: DataTypes.STRING,
        allowNull:false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    is_active:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    email_otp: {
        type: DataTypes.STRING,
    },
    mobile_otp: {
        type: DataTypes.STRING,
    },
}, { 
    timestamps: false,
});

sequelize.sync().then( ()=> console.log(" User table created")).catch((err)=>console.log(err))

module.exports = Users;
