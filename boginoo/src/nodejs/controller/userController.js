const mongoose = require("mongoose");
const { createUserQuery } = require("../query/userQuery");

exports.userCreate = async (req, res) => {
  try {
    await createUserQuery(req);
    res.send(`success user created`);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};
