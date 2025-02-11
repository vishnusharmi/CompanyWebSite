const Content  = require("../models/Content")

exports.createContent = async(data) =>{
    try {
        const  content = await Content.create(data)
        return  content 
    } catch (error) {
        console.log(error)
    }
}

exports.getAllContents = async () =>{
    try {
        const  contents  = await Content.findAll({})
        return  contents
    } catch (error) {
        console.log(error)
    }
}

exports.getContentById = async (id) =>{
    try {
        const  content = await Content.findByPk(id);
        return content
    } catch (error) {
        console.log(error)
    }
}

exports.updateContent = async(id) =>{
    try {
        const content = await Company.findByPk(id);
        if(!content){
            return res.status(404).json({error: "content not found "})
        }
        const updateContent = await content.update();
        return updateContent;
    } catch (error) {
        console.log(error)
    }
}

exports.deleteContent = async(id) =>{
    try {
        const deleteContent = await Content.findByPk(id);
        const deleted = await deleteContent.destroy()
        return deleted
    } catch (error) {
        console.log(error)
    }
}