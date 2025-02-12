const ContentModel = require("../models/Content_Model.js");

const createController = async (req, res) => {
  try {
    const { content_type, title, description, is_active } = req.body;

    if (!content_type || !title || !description || !is_active)
      return res.status(404).json({ message: "All Fields are required." });

    const content = await ContentModel.create({
      content_type,
      title,
      description,
      is_active,
    });

    if (!content)
      return res.status(404).json({ message: "Unable to create the content" });

    return res
      .status(200)
      .json({ message: "Content created successfully", data: content });
  } catch (error) {
    console.error("Error in create controller: ", error.message);
    return res.status(404).json({
      message:
        "Something wen't wrong while creating the content. Please try again",
    });
  }
};

const getAllContents = async (req, res) => {
  try {
    const contents = await ContentModel.findAll();
    if (!contents)
      return res.status(404).json({
        message: "Something wen't wrong while fetching your contents",
      });

    res
      .status(200)
      .json({ message: "Content fetched successfully", data: contents });
  } catch (error) {
    console.error("Error in getAllContents controller: ", error.message);
    res
      .status(404)
      .json({ message: "Something wen't wrong while fetching your contents" });
  }
};

const updateContent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(404).json({
        message: "Id not found. Please provide an id to update the content.",
      });
    const content = await ContentModel.findByPk(id);
    if (!content)
      return res.status(404).json({ message: "Content not found!!" });
    await content.update(req.body);
    await content.reload();

    res
      .status(200)
      .json({ message: "Content updated successfully.", data: content });
  } catch (error) {
    console.error("Error in updatedContent Controller: ", error.message);
    return res
      .status(404)
      .json({ message: "Something wen't wrong while updating the content." });
  }
};

const deleteContent = async (req, res) => {
  try {
    const { id } = req.params;
    const content = await ContentModel.findByPk(id);
    if (!content)
      return res.status(404).json({ message: "Content not found!" });

    await content.destroy();

    return res.status(200).json({ message: "Content deleted successfully." });
  } catch (error) {
    console.error(
      "Error while deleting the content in the delete controller: ",
      error.message
    );
    return res.status(404).json({
      message:
        "Something wen't wrong. Unable to delete the content. Please try again",
    });
  }
};

const getContentByID = async (req, res) => {
  try {
    const { id } = req.params;
    const content = await ContentModel.findByPk(id);
    if (!content)
      return res
        .status(404)
        .json({ message: "Unable to fetch the content with the ID." });
    res
      .status(404)
      .json({ message: "Content fetched successfully.", data: content });
  } catch (error) {
    console.error("Error in the getContentByID controller: ", error.message);
    return res.status(404).json({
      message: "Something wen't wrong while fetching the specific content.",
    });
  }
};

module.exports = {
  createController,
  getAllContents,
  getContentByID,
  updateContent,
  deleteContent,
};
