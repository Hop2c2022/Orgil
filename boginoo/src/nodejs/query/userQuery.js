const User = require("../database/model/user");

exports.createUserQuery = async (req) => {
  const { password, email } = req.body;
  const result = await new User({
    password: password,
    email: email,
  }).save();
  return result;
};
