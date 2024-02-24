const mongoose = require("mongoose");
const Dishes = require("./dishesSchema");
const Cart = require("./cartSchema");
const cartDetailsSchema = new mongoose.Schema({
    
        dishID: {
          type: [Dishes.Schema]
        },
        quantity: {
          type: Number,
          required: true,
        },
        price:{
          type: Number,
          required:true
        },
        cartID:{
            type:[Cart.Schema]
        }
      },
    );

  const CartDetails = mongoose.model('CartDetails', cartDetailsSchema);

  module.exports = CartDetails;