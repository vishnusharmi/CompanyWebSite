const Company = require("../models/Company")

exports.createCompany = async(data) =>{
    try {
        const company = await Company.create(data)
        return company
    } catch (error) {
        console.log(error)
    }
}

exports.getAllCompanies = async () =>{
    try {
        const companies = await Company.findAll({})
        return companies
    } catch (error) {
        console.log(error)
    }
}

exports.getCompanyById = async (id) =>{
    try {
        const company = await Company.findByPk(id);
        return company
    } catch (error) {
        console.log(error)
    }
}

exports.updateCompany = async(id) =>{
    try {
        const company = await Company.findByPk(id);
        if(!company){
            return res.status(404).json({error: "Company not found "})
        }
        const updateCompany = await company.update();
        return updateCompany;
    } catch (error) {
        console.log(error)
    }
}

exports.deleteCompany = async(id) =>{
    try {
        const deleteCompany = await Company.findByPk(id);
        const deleted = await deleteCompany.destroy()
        return deleted
    } catch (error) {
        console.log(error)
    }
}