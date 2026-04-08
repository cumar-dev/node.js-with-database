const express = require("express");
const { createUser, getUsers } = require("../controllers/user");
const router = express.Router();

router.post("/", createUser);    // POST /users
router.get("/", getUsers);       // GET /users

module.exports = router;