const mongoose = require("mongoose");
const { Schema } = mongoose;

// CREATING MONGOOSE SCHEMA
// SCHEMA IS THE BLIUE PRINT OF THE DATA THAT WE NEED TO STORE
const MahalSchema = new Schema({
  mahalName: String,
  mahalFeatures: {
    seatingCapacity: Number,
    parking: Boolean,
    diningCapacity: Number,
  },
  pricingDetails: {
    pricingPerHour: Number,
    pricingPerDay: Number,
  },
  addressDetails: {
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    pinCode: Number,
  },
  contactDetails: {
    primaryPhone: String,
    secondaryPhone: String,
  },
  createdAt: Date,
  updatedAt: Date,
  createdBy: Schema.Types.ObjectId,
  updatedBy: Schema.Types.ObjectId,
});

module.exports = mongoose.model("mahal", MahalSchema);
