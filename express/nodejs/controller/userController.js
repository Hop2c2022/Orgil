const mongoose = require("mongoose");
const PostModel = require("../database/model/post");
const User = require("../database/model/users");

exports.userPostController = async (req, res) => {
  try {
    const { username, password, email, gender } = req.body;
    const result = await new User({
      username: username,
      password: password,
      email: email,
      gender: gender,
    }).save();
    res.send("success");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

exports.userDeleteController = async (req, res) => {
  try {
    const { id } = req.params;
    const objId = new mongoose.Types.ObjectId(id);
    const result = await User.findByIdAndDelete({ _id: objId }, { new: true });
    res.send(`Success, ${result.username} deleted `);
  } catch (err) {
    res.send(err.message);
  }
};
exports.userUpdateController = async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.body;
    const objId = new mongoose.Types.ObjectId(id);
    const resultLast = await User.findById({ _id: objId });
    const result = await User.findOneAndUpdate(
      { _id: objId },
      { username: username },
      { new: true }
    );
    res.send(`Success , ${resultLast.username} ni ${result.username} soligdov`);
  } catch (err) {
    res.send(err.message);
  }
};
exports.postPostController = async (req, res) => {
  try {
    const { postValue } = req.body;
    const result = new Post({
      postValue: postValue,
      uid: req.params.uid,
    }).save();
    res.send("success posted");
  } catch (err) {
    res.send(err.message);
  }
};
// exports.userUpdateController = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { password } = req.body;
//     const objId = new mongoose.Types.ObjectId(id);
//     const result = await User.findOneAndUpdate(
//       { _id: objId },
//       { password: password },
//       { new: true }
//     );
//     res.send(`Password changed`);
//   } catch (err) {
//     res.send(err.message);
//   }
// };
// exports.userUpdateController = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { gender } = req.body;
//     const objId = new mongoose.Types.ObjectId(id);
//     const result = await User.findOneAndUpdate(
//       { _id: objId },
//       { gender: gender },
//       { new: true }
//     );
//     res.send(`Gender changed`);
//   } catch (err) {
//     res.send(err.message);
//   }
// };
// exports.userUpdateController = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { email } = req.body;
//     const objId = new mongoose.Types.ObjectId(id);
//     const result = await User.findOneAndUpdate(
//       { _id: objId },
//       { email: email },
//       { new: true }
//     );
//     res.send(`Email changed`);
//   } catch (err) {
//     res.send(err.message);
//   }
// };

// exports.userGetController = (req, res) => {
//   res.status(200).send(database);
// };

// exports.userPostController = (req, res) => {
//   const { name, job, id } = req.body;
//   database.push({ name: name, job: job, id: id });
//   res.status(201).send(" Successfully created new user ");
// };

// exports.usersDeleteController = (req, res) => {
//   const { ids } = req.body;
//   const newDatabse = database.filter(
//     (el, index) => el.id != ids.map((item) => item)[index]
//   );
//   res.status(200).send(newDatabse);
// };

// exports.userPutController = (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   const newDatabse = database.map((el) =>
//     el.id == id ? (el.name = name) : el.name
//   );
//   res.status(200).send(newDatabse);
// };
