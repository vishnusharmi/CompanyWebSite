const express = require("express");
const {createEarning, getAllEarnings, getEarningById, updateEarning, deleteEarning} = require("../controller/earningController");

const router = express.Router();

// Create Earning
router.post("/", createEarning)
.get("/",getAllEarnings)
.get("/:id",getEarningById)
.put("/:id", updateEarning)
.delete("/:id", deleteEarning)

module.exports = router;
