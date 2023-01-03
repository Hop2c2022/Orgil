const mongoose = require("mongoose");
const {
  createCommentQuery,
  deleteCommentQuery,
} = require("../query/commentQuery");

exports.commentCreate = async (req, res) => {
  try {
    await createCommentQuery(req);
    res.send(`Success comment created`);
  } catch (err) {
    res.send(err.message);
    console.log("aaasdasdaa");
  }
};
exports.commentDelete = async (req, res) => {
  try {
    await deleteCommentQuery(res);
    res.send(`Success comment deleted`);
  } catch (err) {
    console.log(err);
  }
};
