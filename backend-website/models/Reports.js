const {DataTypes} = require("sequelize")
const sequelize = require("../db")

const Report  = sequelize.define("Report",{
    report_id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    company_id:{
        type:DataTypes.INTEGER,
    },
    created_by:{
        type: DataTypes.INTEGER
    },
    task_completed:{
        type: DataTypes.INTEGER
    },
    total_earings:{
        type: DataTypes.INTEGER
    },
    is_active:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    reported_date:{
        type:DataTypes.INTEGER
    }
},{timestamps:false})


sequelize.sync().then( ()=> console.log("Content table created")).catch((err)=>console.log(err))

Report.belongsTo(Company, { foreignKey: 'company_id' });
Report.belongsTo(User, { foreignKey: 'created_by' });

module.exports = Report
