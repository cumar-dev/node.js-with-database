import User from "../model/auth.js";
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
    console.log(newUser);
    const token = jwtToken(newUser._id);
    return res.status(201).json({
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (err) {
    console.log(err.message);
    return next(err);
  }
};

export const logIn = async (req, res, next) => {
  let { email, password } = req.body;
  console.log(email, password);
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    email = email.toLowerCase();
    const user = await User.findOne({ email });
    console.log("user now", user);
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "invalid user or password" });
    }

    const token = jwtToken(user._id);
    console.log("user token" ,token);
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    next(err);
  }
};
