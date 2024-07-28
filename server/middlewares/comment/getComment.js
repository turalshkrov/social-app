const Comment = require('../../models/Comment');

const getComment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);

    if (!comment) return res.status(404).json({ message: "Comment not found" });

    req.comment = comment;
    return next();
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = getComment;