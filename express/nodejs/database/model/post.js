const mongoose = require(`mongoose`);

const Post = new mongoose.Schema({
  posts: { type: String, required: true },
  uid: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const PostModel = mongoose.model("posts", Post);
module.exports = PostModel;
