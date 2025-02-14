const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Roles=sequelize.define("Roles",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        

    },
    roleName:{
        type: DataTypes.ENUM("admin", "employee", "company"),
    }

});

module.exports=Roles;
