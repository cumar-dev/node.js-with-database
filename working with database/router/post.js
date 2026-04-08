const express = require("express");
const { createPost, getPosts, updatedPost, deletePost } = require("../controllers/post");
const router = express.Router();

router.post("/", createPost);  // POST /posts
router.get("/", getPosts);     // GET /posts
router.put("/:id", updatedPost);
router.delete("/:id", deletePost);
module.exports = router;