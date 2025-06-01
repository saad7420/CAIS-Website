const GalleryImage = require("../models/galleryImage");

// Upload new image
const uploadImage = async (req, res) => {
  try {
    const image = new GalleryImage(req.body);
    await image.save();
    res.status(201).json({ message: "Image uploaded", data: image });
  } catch (err) {
    res.status(500).json({ error: "Upload failed" });
  }
};

// Get all images
const getAllImages = async (_req, res) => {
  try {
    const images = await GalleryImage.find().sort({ createdAt: -1 });
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ error: "Fetch failed" });
  }
};

// Delete image
const deleteImage = async (req, res) => {
  try {
    await GalleryImage.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Image deleted" });
  } catch (err) {
    res.status(500).json({ error: "Deletion failed" });
  }
};

module.exports = {
  uploadImage,
  getAllImages,
  deleteImage,
};
