const mongoose = require("mongoose");
const Post = require("../database/model/post");
const { postCreateQuery, postDeleteQuery } = require("../query/postQuery");
exports.postCreate = async (req) => {
  try {
    await postCreateQuery(req);
    res.send(`Success post`);
  } catch (err) {
    res.send(err.message);
  }
};
exports.postDelete = async (req) => {
  try {
    await postDeleteQuery(req);
    res.send(`Success post deleted`);
  } catch (err) {
    res.sen(err.message);
  }
};
