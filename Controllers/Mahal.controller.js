const MahalRouter = require("express").Router();
const MahalModel = require("../Models/Mahal.model");

// GET ALL THE USERS
/**
 * METHOD = GET
 * REQUEST - {}
 * RESPONSE - ARRAY<USERS>
 */
MahalRouter.get("/", (req, res, next) => {
  MahalModel.find()
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

// CREATE NEW MAHAL
/**
 * METHOD = POST
 * INPUT = Object<MahalModel>
 * OUTPUT = Object<Mahal>
 */
MahalRouter.post("/create", (req, res, next) => {
  // Getting details from request object
  const data = req.body;
  console.log(req.body);
  // Creating Mahal Model data
  const Mahal = new MahalModel({
    mahalName: data.mahalName,
    mahalImages: data.mahalImages,
    mahalFeatures: {
      seatingCapacity: data.seatingCapacity,
      parking: data.parking,
      diningCapacity: data.diningCapacity,
    },
    pricingDetails: {
      pricingPerHour: data.pricingPerHour,
      pricingPerDay: data.pricingPerDay,
    },
    addressDetails: {
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
      city: data.city,
      state: data.state,
      pinCode: data.pincode,
    },
    contactDetails: {
      primaryPhone: data.primaryPhone,
      secondaryPhone: data.secondaryPhone,
    },
  });
  // Save query
  Mahal.save()
    .then((response) => {
      if (response && response._id) {
        return res.status(200).json({
          success: true,
          message: "Mahal created successfully!!!",
        });
      }
    })
    .catch((err) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Alas! Error Occurred",
          err: err.message,
        });
      }
    });
});

module.exports = MahalRouter;
