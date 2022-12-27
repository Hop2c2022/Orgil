const mongoose = require(`mongoose`);

const Post = new mongoose.Schema({
  posts: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const PostModel = mongoose.model("Post", Post);
module.exports = PostModel;
