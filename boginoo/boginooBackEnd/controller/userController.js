const mongoose = require("mongoose");
const User = require("../database/model/users");
const { signUp } = require("../query/userQuery");
const { TokenGenerator } = require("../helper/helper");
// exports.userCreate = async (req, res) => {
//   try {
//     await createUserQuery(req);
//     res.send(`success user created`);
//   } catch (err) {
//     console.log(err.message);
//     res.send(err.message);
//   }
// };
exports.userGet = async (req, res) => {
  const result = await User.find();
  res.send({ data: result });
};

exports.UserGetId = async (req, res) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await User.findById({ _id: objId });
  res.send({ data: result });
};
exports.signUp = async (req, res) => {
  try {
    await signUp(req);
    res.send(`success user created`);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

exports.userLogin = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.send(" You don't have any user account, please sign up ");
  } else if (user.password === password && user.email === email) {
    const token = await TokenGenerator({ uid: user._id, expires: 1200 });
    res.send({ token: token });
    return;
  } else {
    res.send("Invalid password or email");
    return;
  }
};
