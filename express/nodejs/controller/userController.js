const mongoose = require("mongoose");

exports.userPostController = (req, res) => {};
exports.userPostController = async (req, res) => {
  try {
    const { username, password, email, gender } = req.body;
    const result = await new User({
      username: username,
      password: password,
      email: email,
      gender: gender,
    }).save();
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};

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

// exports.userDeleteController = (req, res) => {
//   const { id } = req.params;
//   const newDatabse = database.filter((el) => el.id != id);
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
