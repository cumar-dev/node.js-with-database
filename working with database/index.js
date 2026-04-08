require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./router/user");
const postRouter = require("./router/post");

const app = express();
app.use(express.json());

// routes
app.use("/users", userRouter);  // handle users
app.use("/posts", postRouter);  // handle posts

// DB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ Connection error:", err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});