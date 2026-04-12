import User from "../model/user.js";
import { jwtToken } from "../utils/generateToken.js";

export const register = async (req, res, next) => {
  let { name, password, email } = req.body;
  try {
    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields are required" });
    }

    email = email.toLowerCase();
    const exists = await User.findOne({ email });

     if (exists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = await User.create({ name, email, password });
    console.log(newUser)
    const token = jwtToken(newUser._id);
    return res.status(201).json({
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (err) {
  console.log(err.message)
   return next(err);
  }
};
