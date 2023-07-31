const UserRouter = require("express").Router();
const UserModel = require("../Models/Users.model");
// const { generateHashedPassword } = require("../utils/Auth.utils");
var mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// GET ALL THE USERS
/**
 * METHOD = GET
 * REQUEST - {}
 * RESPONSE - ARRAY<USERS>
 */
UserRouter.get("/", (req, res, next) => {
  UserModel.find()
    .then((cursor) => {
      if (cursor && cursor.length > 0) {
        return res.status(200).json({
          data: cursor,
          success: true,
          message: "Users fetched successfully!!!",
        });
      } else {
        return res.status(200).json({
          data: [],
          success: true,
          message: "No Data Found!!!",
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

// UPDATE USER DATA
/**
 * METHOD = PUT or PATCH
 * INPUT = Updated User Data
 * OUTPUT = Undefined
 */
UserRouter.patch("/:id", (req, res, next) => {
  const updatedUserData = req.body;
  const { id } = req.params;
  var userId = new mongoose.Types.ObjectId(id);
  // UserModel.updateOne({ _id: userId }, updatedUserData)
  //   .then((response) => {
  //     console.log("Patch Response", response);
  //     return res.status(200).json({
  //       message: "User Updated Successfully!!",
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     return res.status(401).json({
  //       message: "Alas! Error Updating User!!",
  //       error: err,
  //     });
  //   });
  // UserModel.findOneAndUpdate({ _id: userId }, updatedUserData, { new: true })
  //   .then((response) => {
  //     console.log("Patch Response", response);
  //     return res.status(200).json({
  //       message: "User Updated Successfully!!",
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     return res.status(401).json({
  //       message: "Alas! Error Updating User!!",
  //       error: err,
  //     });
  //   });
  // UserModel.findByIdAndUpdate(userId, updatedUserData)
  //   .then((response) => {
  //     if (response && response._id) {
  //       return res.status(200).json({
  //         success: true,
  //         message: "User Updated Successfully!!",
  //         data: response,
  //       });
  //     }
  //   })
  //   .catch((err) => {
  //     return res.status(401).json({
  //       success: false,
  //       message: "Alas! Error Updating User!!",
  //       error: err,
  //     });
  //   });
  UserModel.findOneAndUpdate({ _id: userId }, updatedUserData, { new: true })
    .then((response) => {
      if (response && response._id) {
        return res.status(200).json({
          success: true,
          message: "User Updated Successfully!!",
          data: response,
        });
      }
    })
    .catch((err) => {
      return res.status(401).json({
        success: false,
        message: "Alas! Error Updating User!!",
        error: err,
      });
    });
});

module.exports = UserRouter;
