import express from "express";
import { logIn, register } from "../controller/auth.js";
import { protectedRout } from "../middleware/authentication.js";
import { validate } from "../middleware/validate.js";
import { createUserSchema } from "../Schemas/user.js";
const router = express.Router();

// register and logIn

router.post("/register", validate(createUserSchema), register);
router.post("/login", logIn);

// protected Rout

router.get("/profile", protectedRout, (req, res) => {
  res.json(req.user);
});
export default router;
