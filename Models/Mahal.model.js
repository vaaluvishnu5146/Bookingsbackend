const mongoose = require("mongoose");
const { Schema } = mongoose;

// CREATING MONGOOSE SCHEMA
// SCHEMA IS THE BLIUE PRINT OF THE DATA THAT WE NEED TO STORE
const MahalSchema = new Schema({
  mahalName: String,
  mahalImages: {
    type: Array,
    required: true,
  },
  mahalFeatures: {
    seatingCapacity: { type: Number, required: true },
    parking: { type: Boolean, required: true },
    diningCapacity: { type: Number, required: true },
  },
  pricingDetails: {
    pricingPerHour: { type: Number, required: true },
    pricingPerDay: { type: Number, required: true },
  },
  addressDetails: {
    addressLine1: { type: String, required: true },
    addressLine2: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pinCode: { type: Number, required: true },
  },
  contactDetails: {
    primaryPhone: { type: String, required: true },
    secondaryPhone: { type: String, required: false },
  },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
  createdBy: { type: String, required: false }, // Schema.Types.ObjectId
  updatedBy: { type: String, required: false }, // Schema.Types.ObjectId
});

module.exports = mongoose.model("mahal", MahalSchema);
