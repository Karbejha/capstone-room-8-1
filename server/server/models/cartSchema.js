const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
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
        tottalBill:{
          type: Number,
          required:true
        }
      },
    ],
  });

  const Cart = mongoose.model('Cart', cartSchema);

  module.exports = Cart;