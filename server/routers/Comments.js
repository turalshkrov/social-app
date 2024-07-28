const authenticationToken = require('../middlewares/auth/authenticationToken');
const Comment = require('../models/Comment');
const express = require('express');
const Post = require('../models/Post');
const getComment = require('../middlewares/comment/getComment');
const router = express.Router();

router.post('/create', authenticationToken, async (req, res) => {
  try {
    const author = req.userId;
    const { postId, content } = req.body;

    const comment = new Comment({ author, postId, content });
    const post = await Post.findById(postId);

    if(!post) return res.status(404).json({ message: "Post not founf" });

    post.comments.push(comment._id);
    await comment.save();
    await post.save();

    res.status(201).json({ message: "Comment created successfully", comment });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/:id/update', authenticationToken, getComment, async (req, res) => {
  try {
    const { content } = req.body;
    const comment = req.comment;

    if (req.userId !== String(comment.author)) return res.status(403).json({ message: "Access denied" });
    
    comment.content = content;
    await comment.save();

    res.status(200).json({ message: "Comment updated successfully", comment });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', authenticationToken, getComment, async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(req.comment.postId);
    post.comments.pull(id);

    await Comment.findByIdAndDelete(id);
    await post.save();

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;