import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { errorHandler } from "./middleware/errorHandler.js";
import userRouter from "./routes/auth.js";
import adminRoutes from "./routes/admin.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/auth", userRouter);
app.use("/admin", adminRoutes);
app.use(errorHandler);
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server at http://localhost:${PORT}`));
  })
  .catch(err => console.error('❌ DB connection error:', err));