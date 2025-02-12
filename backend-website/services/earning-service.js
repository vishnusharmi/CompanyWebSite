const Earning = require('../models/Earning')

exports.createEarnings = async(data) =>{
    try {
        const earning = await Earning.create(req.body);
        return earning;
    } catch (error) {
        console.log(error)
    }
}

exports.getAllEarings = async() =>{
    try {
        const earnings = await Earning.findAll();
        return earnings
    } catch (error) {
        console.log(error)
    }
}

exports.getEaringsById = async(id) =>{
    try {
        const earning = await Earning.findByPk(id)
        return earning;
    } catch (error) {
        console.log(error)
    }
}

exports.updateEarning = async(id) =>{
    try {
        const update = await Earning.findByPk(id);
        if(!update){
            return res.status(404).json({error: "Earnings not found "})
        }
        const updateEarning = await update.update()
        return updateEarning
    } catch (error) {
        console.log(error)
    }
}

exports.deleteEarning = async(id) =>{
    try {
        const deleteEarning = await Earning.findByPk(id);
        const deleted = await deleteEarning.destroy()
        return deleted
    } catch (error) {
        console.log(error)
    }
}