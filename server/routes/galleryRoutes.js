const express = require("express");
const router = express.Router();
const {
  uploadImage,
  getAllImages,
  deleteImage,
} = require("../controller/galleryController");

router.post("/gallery", uploadImage);
router.get("/gallery", getAllImages);
router.delete("/gallery/:id", deleteImage);

module.exports = router;
