import express from "express";
import { protectedRouter } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
const router = express();
router.get("/dashboard", protectedRouter, authorize("admin"), (req, res)=> {
    res.json({message: `welcome to admin dashboard ${req.user.name}`})
})
export default router;