const mongoose = require("mongoose");
const { signUp } = require("../query/userQuery");

// exports.userCreate = async (req, res) => {
//   try {
//     await createUserQuery(req);
//     res.send(`success user created`);
//   } catch (err) {
//     console.log(err.message);
//     res.send(err.message);
//   }
// };
exports.signUp = async (req, res) => {
  try {
    await signUp(req);
    res.send(`success user created`);
  } catch (err) {
    res.send(err.message);
  }
};
