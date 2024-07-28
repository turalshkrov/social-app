const Post = require('../../models/Post');

const getPost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    
    req.post = post;
    return next();
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = getPost;