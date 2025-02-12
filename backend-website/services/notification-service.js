const Notification = require("../models/Notification")

exports.createNotification = async(data) =>{
    try {
        const notification = await Notification.create(data)
        return notification
    } catch (error) {
        console.log(error)
    }
}

exports.getAllNotifications = async () =>{
    try {
        const notifications = await Notification.findAll({})
        return notifications
    } catch (error) {
        console.log(error)
    }
}

exports.getNotificationById = async (id) =>{
    try {
        const notification = await Notification.findByPk(id);
        return notification
    } catch (error) {
        console.log(error)
    }
}

exports.updateNotification  = async(id) =>{
    try {
        const notification = await Notification.findByPk(id);
        if(!notification){
            return res.status(404).json({error: "Company not found "})
        }
        const updateNotification = await notification.update();
        return updateNotification;
    } catch (error) {
        console.log(error)
    }
}

exports.deleteNotification  = async(id) =>{
    try {
        const deleteNotification = await Notification.findByPk(id);
        const deleted = await deleteNotification.destroy()
        return deleted
    } catch (error) {
        console.log(error)
    }
}