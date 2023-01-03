const Post = require("../database/model/post");

exports.postCreateQuery = async (req) => {
  const { posts } = req.body;
  const { id } = req.params;
  const result = await new Post({
    posts: posts,
    uid: id,
  }).save();
  return result;
};
exports.postDeleteQuery = async (req) => {
  const { id } = req.params;
  const result = await Post.findByIdAndDelete({ _id: objId }, { new: true });
  return result;
};

exports.postUpdateQuery = async (req, res) => {
  const { id } = req.params;
  const { change, value } = req.body;
  const a = await Post.findByIdAndUpdate({ _id: id }, { [change]: value });
  return a;
};
