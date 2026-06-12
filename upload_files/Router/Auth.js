import express from "express";
import { logIn, logOut, register } from "../Controller/Auth.js";
import { protectedRout } from "../Middlewares/Authentication.js";
import { validate } from "../Middlewares/Validate.js";
import { createSchema } from "../Schemas/User.js";
const router = express.Router();

// register and logIn

router.post("/register", validate(createSchema), register);
router.post("/login", logIn);
router.post("/logout", protectedRout, logOut);

router.get("/profile", protectedRout, (req, res) => {
  res.json(req.user);
});
export default router;
