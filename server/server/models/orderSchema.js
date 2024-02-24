const mongoose = require('mongoose')
const User = require('./userSchema')
const Restaurant = require('./restaurantSchema')

const orderSchema = new mongoose.Schema({
  orderID: {
    type: Number,
    unique: true,
    required: true
  },
  userID: {
    type: [User.Schema]
  },
  restaurantID: {
    type: [Restaurant.Schema]
  },
  totalBill: {
    type: Number,
    required: true
  },
  orderTime: {
    type: Date
  }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
