import express from "express";
import { createTask, deleteTask, getMyTask, updateTask } from "../Controller/Task.js";
import { protectedRout } from "../Middlewares/Authentication.js"
const router = express.Router();
router.post("/", protectedRout, createTask)
router.get("/", protectedRout, getMyTask);
router.get("/:id", protectedRout, getMyTask)
router.put("/:id", protectedRout, updateTask);
router.delete("/:id", protectedRout, deleteTask)
export default router;
