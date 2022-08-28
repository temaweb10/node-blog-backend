const express = require("express");
const { Post } = require("../models/post");

const {
  getPosts,
  addPost,
  getPost,
  deletePost,
  editPost,
} = require("../controllers/api-post-controller");
const router = express.Router();

router.get("/api/posts", getPosts);
router.get("/api/post/:id", getPost);
router.post("/api/add-post", addPost);
router.delete("/api/post/:id", deletePost);
router.put("/api/edit-post/:id", editPost);

module.exports = router;
