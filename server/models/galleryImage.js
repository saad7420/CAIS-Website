const mongoose = require("mongoose");

const galleryImageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  imageUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String, // e.g., "workshops", "seminars"
    default: "general",
  },
  eventDate: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const GalleryImage = mongoose.model("GalleryImage", galleryImageSchema);
module.exports = GalleryImage;
