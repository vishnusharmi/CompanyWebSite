const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const User = require("./User");
 
const Notification = sequelize.define("Notification", {
    notification_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    useId:{
        type:DataTypes.INTEGER,
    },
    title:{
        type:DataTypes.STRING,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    type:{
        type: DataTypes.ENUM('info', 'warning', 'error')
    },
    is_read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    is_active:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: "notifications",
    timestamps: false,
});

Notification.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
User.hasMany(Notification, { foreignKey: "user_id" });

sequelize.sync().then( ()=> console.log(" Nofications table created")).catch((err)=>console.log(err))
module.exports = Notification;
