const { Sequelize } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(process.env.PROJECT_NAME,process.env.DATABASE_NAME, process.env.PASSWORD, {
    host: "localhost",
    dialect: "postgres",
    // logging: false, // Set to true to see SQL logs
}); 

const connectDB = async () => {
    try {
        await sequelize.authenticate(); 
        console.log("Database connected...");
    } catch (error) {
        console.error("Connection error:", error);
    }
};
connectDB();

module.exports = sequelize;
