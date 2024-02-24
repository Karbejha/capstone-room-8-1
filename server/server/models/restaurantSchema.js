const mongoose = require('mongoose')
const RestaurantSchema = new mongoose.Schema({
  restaurantID: {
    type: Number,
    required: true,
    unique: true
  },
  name: { type: String, required: true, unique: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String },
    zipCode: { type: Number }
  },
  phoneNumber: { type: Number, required: true, unique: true },
  logoImage: { type: String }
})

const Restaurant = mongoose.model('Restaurant', RestaurantSchema)
module.exports = Restaurant
