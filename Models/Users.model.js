const mongoose = require('mongoose');
const { Schema } = mongoose;

// CREATING MONGOOSE SCHEMA
// SCHEMA IS THE BLIUE PRINT OF THE DATA THAT WE NEED TO STORE
const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  dob: String,
  email: String,
  phoneNumber: String,
  gender: String,
  age: Number,
  addressDetails: {
    addressLine1:  String,
    addressLine2: String,
    city: String,
    state: String,
    pincode: Number
  },
  createdAt: String,
  updatedAt: String
});

module.exports = mongoose.model('users', UserSchema);