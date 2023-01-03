const Post = require("../database/model/post");
const {
  postCreateQuery,
  postDeleteQuery,
  postUpdateQuery,
} = require("../query/postQuery");

exports.postCreate = async (req, res) => {
  try {
    await postCreateQuery(req);
    res.send(`Success post`);
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
};
exports.postDelete = async (req, res) => {
  try {
    await postDeleteQuery(req);
    res.send(`Success post deleted`);
  } catch (err) {
    res.send(err.message);
  }
};
exports.postUptade = async (req, res) => {
  try {
    await postUpdateQuery(req);
    res.send(`Success post updated`);
  } catch (err) {
    res.send(err.message);
  }
};
