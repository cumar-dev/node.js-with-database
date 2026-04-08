const express = require("express");
const { createUser, getUsers, updatedUser, deletedUser, getUserInfo } = require("../controllers/user");
const router = express.Router();

router.post("/", createUser);    // POST /users
router.get("/", getUsers);       // GET /users
router.put("/:id", updatedUser);
router.delete("/:id", deletedUser);
router.get("/:id",getUserInfo);
module.exports = router;