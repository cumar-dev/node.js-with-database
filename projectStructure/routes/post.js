const express = require("express");
const router = express.Router();
const {getPostData} = require("../controllers/post");
router.post("/", getPostData);
module.exports = router;