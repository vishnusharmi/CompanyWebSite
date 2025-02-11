const express = require("express");
const router = express.Router();
const {
  createController,
  getAllContents,
  getContentByID,
  updateContent,
  deleteContent,
} = require("../controller/ContentModelController.js");

router.post("/create", createController);
router.get("/all-contents", getAllContents);
router.post("/update-content/:id", updateContent);
router.post("/delete-content/:id", deleteContent);
router.post("/get-content-by-id/:id", getContentByID);

module.exports = router;
