const Post = require("../model/post");

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const saved = await newPost.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatedPost = async(req, res)=> {
  const {id} = req.params;
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, req.body, {new: true});
  if(!updatedPost) return res.status(404).send("user not found");
  res.json(updatedPost);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
  
}

exports.deletePost = async(req, res)=> {
  const {id} = req.params;
  try {
    const deletePost = await Post.findByIdAndDelete(id)
    if(!deletePost) return res.status(404).send("user not found");
    res.send(`post with id ${id} deleted successFully`)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}