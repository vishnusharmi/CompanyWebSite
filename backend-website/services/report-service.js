const Reports = require("../models/Reports")

exports.createReports = async(data) =>{
    try {
        const reports = await Reports.create(data)
        return  reports 
    } catch (error) {
        console.log(error)
    }
}

exports.getAllReports = async () =>{
    try {
        const  reports  = await Reports.findAll({})
        return  reports;
    } catch (error) {
        console.log(error)
    }
}

exports.getReportById = async (id) =>{
    try {
        const  report  = await Reports.findByPk(id);
        return  report
    } catch (error) {
        console.log(error)
    }
}

exports.updateReports = async(id) =>{
    try {
        const  reports  = await Reports.findByPk(id);
        if(!reports){
            return res.status(404).json({error: " reports not found "})
        }
        const updateReports = await company.update();
        return updateReports;
    } catch (error) {
        console.log(error)
    }
}

exports.deleteReports= async(id) =>{
    try {
        const deleteReports = await Reports.findByPk(id);
        const deleted = await deleteReports.destroy()
        return deleted
    } catch (error) {
        console.log(error)
    }
}