const express = require("express");
const {addUser, getAllUser, getUserById, updateUser, deleteUser} = require("../controller/userController");
const router = express.Router();

// Create User
router.post("/", addUser)
.get("/",getAllUser)
.get("/:id", getUserById)
.put("/:id",updateUser)
.delete("/:id",deleteUser)

module.exports = router;
