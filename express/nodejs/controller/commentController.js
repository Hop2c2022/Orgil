const mongoose = require("mongoose");
const Comment = require("../database/model/comment");

exports.commentCreate = async (req, res) => {
  try {
    const { comments } = req.body;
    const { id } = req.params;
    const result = await new Comment({
      comments: comments,
      postId: req.body.postId,
      userId: req.body.userId,
    }).save();
    res.send(`succes`);
  } catch (err) {
    res.send(err.message + "adadada");
    console.log(err.message, "aa");
  }
};
