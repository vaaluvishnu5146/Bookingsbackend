const mongoose = require("mongoose");
const { Schema } = mongoose;

// CREATING MONGOOSE SCHEMA
// SCHEMA IS THE BLIUE PRINT OF THE DATA THAT WE NEED TO STORE
const BookingSchema = new Schema({
  mahalId: Schema.Types.ObjectId,
  customerId: Schema.Types.ObjectId,
  bookingsDetails: {
    startDate: Date,
    endDate: Date,
    totalBookingPrice: Number,
  },
  createdAt: Date,
  updatedAt: Date,
  createdBy: Schema.Types.ObjectId,
  updatedBy: Schema.Types.ObjectId,
});

module.exports = mongoose.model("booking", BookingSchema);
