const mongoose = require("mongoose");
const {
  createUserQuery,
  deleteUserQuery,
  updateUsernameQuery,
} = require("../query/userQuery");
const User = require("../database/model/users");

exports.userCreate = async (req, res) => {
  try {
    await createUserQuery(req);
    res.send(`success user created`);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};
exports.users = async (req, res) => {
  try {
    const { limit, page } = req.query;
    const result = await User.find()
      .skip((page - 1) * limit)
      .limit(10);
    res.send({ data: result });
  } catch (err) {
    res.send(err.message);
  }
};

exports.userDelete = async (req, res) => {
  try {
    await deleteUserQuery(req);
    res.send(`Success, ${result.username} deleted `);
  } catch (err) {
    res.send(err.message);
  }
};
exports.userUpdate = async (req, res) => {
  try {
    await updateUsernameQuery(req);
    res.send(`Success , ${resultLast.username} ni ${result.username} soligdov`);
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
