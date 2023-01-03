const Comment = require("../database/model/comment");

exports.createCommentQuery = async (req) => {
  const result = await new Comment({
    comment: req.body.comment,
    postId: req.body.postId,
    userId: req.body.userId,
  }).save();
  return result;
};

exports.deleteCommentQuery = async (req) => {
  const { id } = req.params;
  const result = await Comment.findByIdAndDelete({ _id: objId }, { new: true });
  return result;
};
