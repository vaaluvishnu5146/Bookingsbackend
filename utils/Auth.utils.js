const bcrypt = require("bcrypt");
const saltRounds = 10;

// function generateHashedPassword(plainTextPassword = "") {
//   return bcrypt.hash(plainTextPassword, saltRounds, function (err, hash) {
//     if (err) {
//       console.log("ERROR", err);
//     } else {
//       hashedPassword = hash;return hash;}
//   });
// }

async function comparePasswords(userEntered, dbSaved) {
  const result = await bcrypt.compare(userEntered, dbSaved);
  return result;
}

module.exports = {
  comparePasswords,
};
