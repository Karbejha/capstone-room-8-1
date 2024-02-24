const mongoose = require('mongoose')
const User = require('./userSchema')
const Restaurant = require('./restaurantSchema')

const cartSchema = new mongoose.Schema({
  cartID: {
    type: Number,
    unique: true,
    required: true
  },
  userID: {
    type: [User.Schema]
  },
  restaurantID: {
    type: [Restaurant.Schema]
  }
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart
