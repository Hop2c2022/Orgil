const mongoose = require(`mongoose`);

const Comment = new mongoose.Schema({
  comments: { type: String, required: true },
  postId: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const CommentModel = mongoose.model("Comment", Comment);
module.exports = CommentModel;
