const express = require("express");
const router = express.Router();
const {deleteUsers} = require("../controllers/Delete");
router.delete("/:id", deleteUsers)
module.exports = router;