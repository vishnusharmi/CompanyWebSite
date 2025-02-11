const express = require('express')
const {createReport, getAllReports,getReportById, updateReport, deleteReport } = require("../controller/reportsController")
const router = express.Router()

// create Reports
router.post("/", createReport)
.get("/",getAllReports)
.get("/:id",getReportById)
.put("/:id", updateReport)
.delete("/:id", deleteReport)


module.exports = router;