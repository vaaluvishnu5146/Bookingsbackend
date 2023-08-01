const AuthRouter = require("express").Router();
const UserModel = require("../Models/Users.model");
const { comparePasswords, generateToken } = require("../utils/Auth.utils");
var mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Sign In User
/**
 * METHOD = POST
 * REQUEST - Object<User>
 * RESPONSE - Object<Response>
 */
AuthRouter.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(async (cursor) => {
      if (cursor && cursor._id) {
        const isMatching = await comparePasswords(password, cursor.password);
        if (isMatching) {
          const newToken = generateToken(
            {
              name: cursor.firstName,
              role: ["admin"],
            },
            process.env.JWT_TOKEN_SECRET
          );
          console.log("TOKEN HERE", newToken);
          return res.status(200).json({
            success: true,
            token: newToken,
            message: "Login Successful!!",
          });
        } else {
          return res.status(200).json({
            success: false,
            message: "Email or Password is wrong, Try Again!!",
          });
        }
      } else {
        return res.status(200).json({
          success: true,
          message:
            "Account Does not Exists, Please create your account to continue!!",
        });
      }
    })
    .catch((err) => {
      return res.status(401).json({
        success: false,
        message: "Error Fetching Users Data!!!",
        error: err,
      });
    });
});

// CREATE ACCOUNT
/**
 * METHOD = POST
 * REQUEST - Object<User>
 * RESPONSE - {}
 */
AuthRouter.post("/signup", (req, res, next) => {
  const data = req.body;
  bcrypt.hash(req.body.password, saltRounds).then(function (hash) {
    if (hash) {
      const User = new UserModel({ ...data, password: hash });
      User.save()
        .then((result) => {
          if (result && result._id) {
            return res.status(200).json({
              message: "User Created Successfully!!",
              data: result,
            });
          }
        })
        .catch((err) => {
          return res.status(401).json({
            message: "Alas! Error Creating User!!",
            error: err,
          });
        });
    } else {
      return res.status(400).json({
        message: "Password is not in required format",
      });
    }
  });
});

module.exports = AuthRouter;
