const express = require("express");
const content_router = express.Router();
const {
  createController,
  getAllContents,
  getContentByID,
  updateContent,
  deleteContent,
} = require("../controller/ContentModelController.js");

content_router.post("/create", createController);
content_router.get("/all-contents", getAllContents);
content_router.post("/update-content/:id", updateContent);
content_router.post("/delete-content/:id", deleteContent);
content_router.post("/get-content-by-id/:id", getContentByID);

module.exports = content_router;
