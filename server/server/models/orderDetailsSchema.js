const mongoose = require('mongoose')
const Order = require('./orderSchema')
const Dishes = require('./dishesSchema')
const orderDetailsSchema = new mongoose.Schema({

  dishID: {
    type: [Dishes.Schema]
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  orderID: {
    type: [Order.Schema]
  }
})

const OrderDetails = mongoose.model('OrderDetails', orderDetailsSchema)

module.exports = OrderDetails
