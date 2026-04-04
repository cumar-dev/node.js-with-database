const express = require("express");
const router = express.Router();
const {getUsers, getUserInfo} = require("../controllers/user");
router.get("/", getUsers);
router.get("/:id",getUserInfo)
module.exports = router;