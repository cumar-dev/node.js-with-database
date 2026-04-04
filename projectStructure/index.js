const express = require("express");
const app = express();
const userRouter = require("./routes/users");
const port = 3000;
app.use(express.json());
app.use("/users",userRouter);
app.listen(port, ()=> {
    console.log(`server is running on http://localhost:${port}`);
})