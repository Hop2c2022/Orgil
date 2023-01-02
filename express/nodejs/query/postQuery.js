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
exports.deletePostQuery = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await User.findByIdAndDelete({ _id: objId }, { new: true });
  return result;
};
