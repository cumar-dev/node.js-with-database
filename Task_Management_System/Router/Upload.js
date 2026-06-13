import express from "express";
import { protectedRout } from "../Middlewares/Authentication.js";
import { uploadFile } from "../Controller/UploadController.js";
import { upload } from "../Middlewares/Upload.js";
const router = express.Router();
router.post("/profile-picture", protectedRout, upload.single("file"), uploadFile)
export default router;