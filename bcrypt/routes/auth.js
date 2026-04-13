import express from "express";
import { register } from "../controller/auth.js";
import { logIn } from "../controller/auth.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", logIn);
export default router;
