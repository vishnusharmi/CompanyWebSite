const express = require('express')
const {createCompany,getAllCompnies, getCompanyById, updateCompany, deleteCompany} = require("../controller/companyController")
const router = express.Router()

// create 
router.post("/", createCompany)
.get("/",getAllCompnies)
.get("/:id", getCompanyById)
.put("/:id", updateCompany)
.delete("/:id",deleteCompany)


module.exports = router;

