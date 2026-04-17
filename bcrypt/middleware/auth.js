import jwt from "jsonwebtoken";
import User from "../model/auth.js";

// protected Rout

export const protectedRouter = async (req, res, next) => {
    // const token = req.headers.authorization;
    console.log("token splited",  req.headers.authorization);
    const token = req.headers.authorization?.split(" ")[1];
    console.log("token splited", token);
    if(!token) {
        return res.status(401).json({message: "no token provided"})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("verified decode", decoded);
        req.user = await User.findById(decoded.id).select("-password");
        console.log("user reading from databse :", req.user);
        next();
    } catch (error) {
       res.status(401).json({message: "unAuthorized"});
    }
}