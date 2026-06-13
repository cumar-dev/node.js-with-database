import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";
import compression from "compression";
import { errorHandler } from "./Middlewares/errorHandler.js";
import authRout from "./Router/Auth.js";
import adminRout from "./Router/Admin.js";
import uploadRout from "./Router/Upload.js"
import taskRout from "./Router/Task.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors({
  origin: [process.env.FRONTEND_URL, process.env.LOCAL_HOST],
  credentials: true
}));
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100
});
app.use(limiter);
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(compression());
app.use("/auth", authRout);
app.use("/admin", adminRout);
app.use("/upload", uploadRout);
app.use("/tasks", taskRout);
app.use(errorHandler);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(
        `🚀 server at http://localhost:${PORT} connected successfully`,
      );
    });
  })
 .catch((error) => {
  console.error("❌ DB connection error:", error);
}
);
