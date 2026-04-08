const express = require("express");
const { createPost, getPosts } = require("../controllers/post");
const router = express.Router();

router.post("/", createPost);  // POST /posts
router.get("/", getPosts);     // GET /posts

module.exports = router;