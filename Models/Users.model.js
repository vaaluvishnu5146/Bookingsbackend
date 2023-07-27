const mongoose = require("mongoose");
const { Schema } = mongoose;

// CREATING MONGOOSE SCHEMA
// SCHEMA IS THE BLIUE PRINT OF THE DATA THAT WE NEED TO STORE
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  dob: Date,
  email: String,
  phoneNumber: String,
  gender: String,
  age: Number,
  addressDetails: {
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    pinCode: Number,
  },
  createdAt: {
    type: Date,
    default: new Date().toString(),
  },
  updatedAt: {
    type: Date,
    default: new Date().toString(),
  },
});

module.exports = mongoose.model("users", UserSchema);
