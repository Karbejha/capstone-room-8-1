const mongoose = require('mongoose')
const User = require('./userSchema')
const Restaurant = require('./restaurantSchema')

const reviewSchema = new mongoose.Schema({
  userID: {
    type: [User.Schema]
  },
  review: {
    type: String
  },
  restaurantID: {
    type: [Restaurant.Schema]
  }
})

const review = mongoose.model('review', reviewSchema)
module.exports = review
