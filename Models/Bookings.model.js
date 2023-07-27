const mongoose = require('mongoose');
const { Schema } = mongoose;

// CREATING MONGOOSE SCHEMA
// SCHEMA IS THE BLIUE PRINT OF THE DATA THAT WE NEED TO STORE
const BookingSchema = new Schema({
  mahalId: Schema.types.ObjectId,
  customerId: Schema.types.ObjectId,
  bookingsDetails: {
    startDate: Date,
    endDate: Date,
    totalBookingPrice: Number,
  },
  createdAt: String,
  updatedAt: String,
  createdBy: String,
  updatedBy: String,
});

module.exports = mongoose.model('booking', BookingSchema);
