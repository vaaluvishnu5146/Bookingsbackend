const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

async function comparePasswords(userEntered, dbSaved) {
  const result = await bcrypt.compare(userEntered, dbSaved);
  return result;
}

function generateToken(data = {}, secret = "") {
  const token = jwt.sign(data, secret, { expiresIn: 60 * 60 });
  return token;
}

function verifyTokenValidity(token = "", SECRET_KEY = "") {
  let isValid;
  if (token) {
    jwt.verify(token, SECRET_KEY, function (err) {
      if (err) {
        isValid = false;
      } else {
        isValid = true;
      }
    });
  } else {
    isValid = false;
  }
  console.log("Token valid?", isValid);
  return isValid;
}

module.exports = {
  comparePasswords,
  generateToken,
  verifyTokenValidity,
};
