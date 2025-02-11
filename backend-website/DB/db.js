const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("mytestdb", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { sequelize, connectDB };
