const express = require("express");
const {createContent, getContentById, getAllContents, updateContent, deleteContent} = require("../controller/contentController");

const router = express.Router();

// Create Content
router.post("/", createContent)
.get("/", getContentById)
.get("/:id", getAllContents)
.put("/:id", updateContent)
.delete("/:id", deleteContent)


module.exports = router;
