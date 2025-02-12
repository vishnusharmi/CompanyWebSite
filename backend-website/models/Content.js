const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Content = sequelize.define("Content", {
    content_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    content_type: {
        type: DataTypes.ENUM("text", "image", "video"),
    },
    description: {
        type: DataTypes.TEXT,
    },
    taskId:{
        type: DataTypes.INTEGER,
    },
    is_active:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: "content",
    timestamps: false,
    createdAt: "created_at",
    updatedAt: "updated_at",
});

sequelize.sync().then( ()=> console.log("Content table created")).catch((err)=>console.log(err))

module.exports = Content;
