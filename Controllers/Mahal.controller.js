const UserRouter = require("express").Router();
const UserModel = require("../Models/Users.model");
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
          message: "Hall fetched successfully!!!",
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
        message: "Error Fetching Hall Data!!!",
        error: err,
      });
    });
});

module.exports = UserRouter;
