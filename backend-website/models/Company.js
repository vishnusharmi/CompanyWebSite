const {DataTypes} = require("sequelize")
const sequelize = require("../config/db")

const Company = sequelize.define("Company",{
    company_id :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    address :{
        type : DataTypes.STRING
    },
    phone:{
        type :DataTypes.STRING
    }
},{
    timestamps:false
})

sequelize.sync().then( ()=> console.log(" company table created")).catch((err)=>console.log(err))
// Company.hasMany(User, { foreignKey: 'company_id' });
// Company.hasMany(Task, { foreignKey: 'company_id' });
// Company.hasMany(Report, { foreignKey: 'company_id' });
module.exports = Company
