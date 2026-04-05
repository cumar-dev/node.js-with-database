const express = require("express");
const router = express.Router();
const {getUpdatedPost} = require("../controllers/update");
router.put("/:id", getUpdatedPost);
module.exports = router;