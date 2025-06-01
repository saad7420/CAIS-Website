const express = require("express");
const router = express.Router();
const blogController = require("../controller/blogController");

router.post("/blog", blogController.createPost);
router.get("/blog", blogController.getPosts);
router.get("/blog/:id", blogController.getPostById);
router.put("/blog/:id", blogController.updatePost);
router.delete("/blog/:id", blogController.deletePost);

module.exports = router;
