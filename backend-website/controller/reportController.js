const Report = require("../models/Reports")
const  reportService = require("../services/report-service")
//create reports 
const  createReport = async(req,res) =>{
  try {
    const report = await reportService.createReports(req.body)
    res.status(200).json({
        success : true,
        message : " Report Created",
        report
    })
  } catch (error) {
    res.status(500).json({
        success : false,
        message : "Internal server error",
        error : error.message
    })
  }
}

//get all reports 
const getAllReports = async(req, res) =>{
try {
    const reports = await reportService.getAllReports();
    res.status(200).json({
        success : true,
        message : "All reports",
        reports
    }) 
} catch (error) {
    res.status(500).json({
        success : false,
        message : "Internal server error",
        error : error.message
    })
}
}

//get a report by id

const getReportById = async(req,res) =>{
    try {
        const report = await reportService.getReportById(req.params.id);
        res.status(200).json({
            success: true,
            message : "report"
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}

//update the report 
const updateReport = async(req,res) =>{
    try {
        const update = await reportService.updateReports(req.params.id);
        res.status(200).json({
            success: true,
            message: " Report updated",
            update
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}

//Delete the report 
const deleteReport = async(req, res)=>{
    try {
        const report = await reportService.deleteReports(req.params.id)
        res.status(200).json({
            success: true,
            message : " Report deleted",
            report
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}

module.exports = {createReport, getAllReports, getReportById, updateReport, deleteReport}