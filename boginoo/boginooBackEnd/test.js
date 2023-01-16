const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(1);
const hash = bcrypt.hashSync("myPassword", salt);
console.log(hash);
