const express = require("express");
const {addNotification, getAllNotifications, getNotificationById, updateNotification, deleteNotification} = require("../controller/notificationController");

const router = express.Router();

// Create Notification
router.post("/", addNotification)
.get("/", getAllNotifications)
.get("/:id",getNotificationById)
.put("/:id", updateNotification)
.delete("/:id", deleteNotification);



module.exports = router;
