const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    items: [
      {
        itemName: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'ShopItem',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalBill: {
      type: Number,
      required: true,
    },
    orderTime:{
      type:Date,
    }
  });

  const Order = mongoose.model('Order', orderSchema);

  module.exports = Order;
  const mongoose = require('mongoose');