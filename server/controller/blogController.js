const BlogPost = require("../models/blogPost");

// CREATE
exports.createPost = async (req, res) => {
  try {
    const post = new BlogPost(req.body);
    await post.save();
    res.status(201).json({ message: "Blog post created", post });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// READ all
exports.getPosts = async (_req, res) => {
  try {
    const posts = await BlogPost.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ single
exports.getPostById = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updatePost = async (req, res) => {
  try {
    const updated = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ message: "Blog post updated", updated });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
exports.deletePost = async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog post deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
