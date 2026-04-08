const User = require("../model/user");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const saved = await newUser.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatedUser = async(req,res)=> {
  const {id} = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true});
  if(!updatedUser) {
    return res.status(404).send("user not found");
  }
  res.json(updatedUser);
  } catch (error) {
    res.status(500).send("server error", error);
  }
}

exports.deletedUser = async(req, res)=> {
  const {id} = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if(!deletedUser) {
      return res.status(404).send("user not found");
    }
    res.send(`User whith id ${id} deleted successfully`);
  } catch (error) {
    res.status(500).send("server error", error)
  }
}

exports.getUserInfo = async(req, res)=> {
  const {id} = req.params;
  try {
    const user = await User.findById(id);
    if(!user) {
    return  res.status(404).send("user not found");
    }
    res.json(user);
  } catch (error) {
    res.status(500).send("server error", error);
  }
}