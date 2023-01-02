exports.createCommentQuery = async (req) => {
  const { comments } = req.body;
  const { id } = req.params;
  console.log("cL ", id);
  const result = await new Comment({
    comments: comments,
    ComId: req.body.ComId,
    userId: req.body.userId,
  }).save();
  return result;
};
