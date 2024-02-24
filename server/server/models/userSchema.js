const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userID: {
    type: Number,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['admin', 'customer']
  },
  username: {
    type: String,
    required: true,
    unique: true
  }

})

const User = mongoose.model('User', userSchema)

module.exports = User
