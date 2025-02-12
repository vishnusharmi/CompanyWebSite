const sequelize = require("../config/db")
const { DataTypes } = require("sequelize");

const ContentModel = sequelize.define("Content", {
  id: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  content_type: {
    type: DataTypes.ENUM("service", "project", "location"),
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = ContentModel;

sequelize
  .sync()
  .then(() => console.log("Database & tables created"))
  .catch((err) => console.error("Error syncing models: ", err.message));
