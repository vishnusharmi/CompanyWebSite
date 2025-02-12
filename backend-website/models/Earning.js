const { DataTypes } = require("sequelize");
const sequelize = require("../config/db")


const Earning = sequelize.define("Earning", {
    earning_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId:{
        type: DataTypes.INTEGER
    },
    amount: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM("pending", "paid", "failed"),
        defaultValue: "pending",
    },
    Payment_date: {
        type: DataTypes.DATE,
    },
    is_active:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
     // currency: {
    //     type: DataTypes.STRING(10),
    //     defaultValue: "USD",
    // },
    // payment_method: {
    //     type: DataTypes.STRING(50),
    // },
    // transaction_id: {
    //     type: DataTypes.STRING(255),
    //     unique: true,
    // },
}, {
    tableName: "earnings",
    timestamps: false,
});

Earning.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
User.hasMany(Earning, { foreignKey: "user_id" });

sequelize.sync().then( ()=> console.log(" Earning table created")).catch((err)=>console.log(err))
module.exports = Earning;
