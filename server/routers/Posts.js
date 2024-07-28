const Post = require('../models/Post');
const express = require('express');
const authenticationToken = require('../middlewares/auth/authenticationToken');
const User = require('../models/User');
const getPost = require('../middlewares/post/getPost');
const router = express.Router();

router.post('/create', authenticationToken, async (req, res) => {
  try {
    const author = req.userId;
    const { content, media } = req.body;
    
    if (!content) return res.status(400).json({ message: "Content is required" });

    const post = new Post({ author, content, media });
    const user = await User.findById(author);
    user.posts.push(post._id);

    await post.save();
    await user.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/update/:id', authenticationToken, getPost, async (req, res) => {
  try {
    const { content, media } = req.body;
    const post = req.post;

    if (String(post.author) !== req.userId) return res.status(403).json({ message: "Access Denied" });

    if (!content) return res.status(400).json({ message: "Content is required" });

    post.content = content;
    post.media = media;
    const newPost = await post.save();

    res.status(200).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/delete/:id', authenticationToken, getPost, async (req, res) => {
  try {
    const { id } = req.params;
    const post = req.post;

    if (String(post.author) !== req.userId) return res.status(403).json({ message: "Access Denied" });

    await Post.findByIdAndDelete(id);

    await User.updateMany(
      { posts: id },
      { $pull: { posts: id } }
    );
    
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', getPost, async (req, res) => {
  try {
    res.status(200).json(req.post);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/', authenticationToken, async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 20;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;
    
    const user = await User.findById(req.userId);
    const followingIds = user.following;

    const followedPosts = await Post.find({ author: { $in: followingIds } })
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .populate('author');

    const otherPosts = await Post.find({ author: { $nin: followingIds } })
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .populate('author');
    
    const posts = [...followedPosts, ...otherPosts];

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/:id/like', authenticationToken, getPost, async (req, res) => {
  try {
    const { id } = req.params;
    const { post, userId } = req;

    if (!post.likes.find(_id => String(_id) === userId)) {
      post.likes.push(userId);
      await post.save();

      res.status(200).json({ message: "Post liked successfully", post });
    } else {
      post.likes.pull(userId);
      await post.save();

      res.status(200).json({ message: "Post unliked successfully", post });
    }

  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;