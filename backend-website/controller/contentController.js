
const  Company = require("../models/Company")
const companyService = require('../services/company-service')
//create company 

const createCompany = async(req,res)=>{
    try {
       const company = await companyService.createCompany(req.body)
        res.status(200).json({
            success : true,
            message : " Compnay created",
            company
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}

//Get all company 
const getAllCompnies = async(req,res) =>{
    try {
        const companies = await companyService.getAllCompanies()
        res.status(200).json({
            success : true,
            message : " all companies ",
            companies
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}

// Get company by ID

const getCompanyById = async(req,res) =>{
    try {
        const company = await companyService.getCompanyById(req.params.id);
        res.status(200).json({
            success:true,
            message : " company by Id",
            company
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}

// update company 
const updateCompany = async(req, res)=>{
    try {
        const updateCompany = await companyService.deleteCompany(req.params.id)
        res.status(200).json({
            success : true,
            message : "company updated0",
            updateCompany
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}

//Delete company 
const deleteCompany = async(req, res) =>{
    try {
        const company = await companyService.deleteCompany(req.params.id)
        res.status(200).json({
            success: true,
            message: " company deleted ",
            company
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message
        })
    }
}


module.exports = {createCompany,getAllCompnies,getCompanyById,updateCompany, deleteCompany}