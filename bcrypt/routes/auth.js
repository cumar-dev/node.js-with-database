import express from "express";
import { register } from "../controller/auth.js";
import { logIn } from "../controller/auth.js";
import { protectedRouter } from "../middleware/auth.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", logIn);

// protected route
router.get("/profile", protectedRouter, (req, res)=>{
    res.json(req.user);
})


export default router;
