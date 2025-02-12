const { DataTypes } = require('sequelize');
const sequelize = require("../config/db")

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    assignedTo: { 
        type: DataTypes.INTEGER,
        allowNull: true,
       references:{
        model:'users',
        key:'id'
       }
    },
    assignedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references:{
            model:'users',
            key:'id'
           }
       
    },
    status: {
        type: DataTypes.ENUM('pending', 'In progress', 'completed'),
        defaultValue: 'pending',
        allowNull: false
    },
    deadline: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'users',
            key:'id'
           }
       
    },
}, { timestamps: true });

module.exports = Task;
